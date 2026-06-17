# Lead Magnet Backend Handoff

Date: 2026-06-17

## Decision

Use a dedicated lead magnet page at:

`/pause-playbook`

This keeps the homepage focused on brand positioning while giving us one focused conversion URL for LinkedIn, Instagram, article CTAs, footer CTAs, and any future paid/social traffic.

## Current Frontend Status

Implemented page:

`pause-playbook.html`

Live route under Vercel clean URLs:

`https://www.thedeliberatepause.com/pause-playbook`

The page currently includes:

- Current TDP header/nav.
- Current TDP footer.
- Human-facing lead magnet copy.
- Email capture form.
- Success/status state after email submit.
- Download panel revealed after submit.
- Tracking events pushed to `window.dataLayer`.
- Indexable page metadata.
- `/pause-playbook` included in `sitemap.xml`.

CTA routing keeps both acquisition paths visible:

- Homepage hero shows `Subscribe` to Substack and `Get the playbook` to `/pause-playbook`.
- Active public page footers show `Subscribe` to Substack and `Get the playbook` to `/pause-playbook`.
- Header/nav Subscribe CTAs still point directly to Substack until the Kit/backend endpoint is confirmed.

## Current Form State

The form is intentionally using a placeholder action until the real Kit/backend endpoint is available:

```html
<form
  class="form-row"
  id="kit-lead-form"
  action="#kit-placeholder"
  method="post"
  data-kit-placeholder="true"
  data-event-location="pause_playbook_hero"
>
```

When the placeholder is active, submit does not send email data to a third party. Instead it:

- prevents default form submission;
- pushes a tracking event;
- shows the user a status message;
- reveals the playbook download link.

## Tracking Events

The current frontend emits:

| Event | When | Key Fields |
|---|---|---|
| `kit_form_view` | Page form is shown | `page_path`, `page_title`, `cta_location`, `lead_magnet` |
| `kit_form_submit_attempt` | Placeholder form is submitted | `cta_text`, `cta_location`, `lead_magnet` |
| `kit_form_submit` | Real endpoint form is submitted | Same as above, once placeholder is removed |
| `lead_magnet_download` | Download link is clicked | `cta_text`, `cta_location`, `lead_magnet`, `destination_url` |

Lead magnet value:

`pause_playbook`

Primary CTA location:

`pause_playbook_hero`

## Backend Requirement

To complete the live capture workflow, we need one of the following:

1. Kit embed/form action URL and required field names.
2. A custom backend endpoint that accepts email and handles Kit/Substack sync.
3. Confirmation that Substack should receive the email directly instead of Kit.

Recommended architecture:

- Frontend form submits to Kit or a small backend endpoint.
- Kit stores the subscriber and applies a lead-magnet tag.
- Backend/automation syncs the subscriber to Substack if Substack must send the Monday Letter.
- The page remains the conversion surface; Kit/Substack own delivery and list operations.

## Make Endpoint Setup: Webflow/Form -> Make -> Kit -> Substack

Make can serve as the "custom backend endpoint" for this flow. In that setup, the site form posts to a Make webhook URL, and Make handles the subscription workflow without us building or hosting a separate backend.

Recommended source of truth:

- Kit should be the primary subscriber system for the lead magnet.
- Substack should remain the newsletter publishing/delivery surface unless Avi decides Kit will send the Monday Letter.
- Substack sync should be treated as a secondary step, because Substack subscriber-write automation needs to be confirmed inside the actual Substack/Make account. Do not rely on unofficial/private Substack endpoints.

### Make Scenario Shape

1. Create a new Make scenario.
2. Add trigger: `Webhooks` -> `Custom webhook`.
3. Name it clearly, for example:

   `TDP - Pause Playbook Signup`

4. Copy the generated webhook URL.
5. In Webflow, set the `/pause-playbook` form submit action to that webhook URL, or use a small Webflow embed/custom code form if the native form action is not flexible enough.
6. Send a test submission from Webflow so Make can detect the fields.
7. Expected fields:

   | Field | Required | Notes |
   |---|---:|---|
   | `email` or `email_address` | Yes | Normalize to lowercase and trim whitespace in Make. |
   | `first_name` | Optional | Add later if the final form asks for it. |
   | `source_page` | Recommended | Example: `/pause-playbook`. |
   | `cta_location` | Recommended | Example: `pause_playbook_hero`, `footer`, `homepage_hero`. |
   | `lead_magnet` | Recommended | Use `pause_playbook`. |
   | `utm_source`, `utm_medium`, `utm_campaign` | Optional | Preserve if available for attribution. |

### Make Steps

1. Webhook receives the form payload.
2. Add validation/filter:
   - email exists;
   - email contains `@`;
   - honeypot field is empty if Webflow includes one;
   - optional: block obvious test domains during production.
3. Add/Update subscriber in Kit:
   - Use the native Kit module if available in Make.
   - If using HTTP instead, use Kit's API to create/upsert the subscriber. Kit's current docs describe `Create a subscriber` as an upsert: new emails are created and existing emails are updated.
4. Apply Kit tag:
   - Suggested tag: `lead_magnet_pause_playbook`.
   - Optional source tags: `source_webflow`, `source_homepage`, `source_footer`.
   - Kit's API supports tagging subscribers, including by email address, after the subscriber exists.
5. Add subscriber to Kit sequence/form for delivery:
   - Preferred delivery: a Kit sequence sends the Pause Playbook link and then the nurture/Monday Letter path.
   - Alternative delivery: Make immediately sends a transactional email with the PDF link, but Kit sequence delivery is cleaner for analytics and lifecycle.
6. Substack sync:
   - First check whether Make has a supported Substack app/module in the workspace.
   - If yes, add/update the subscriber there after Kit succeeds.
   - If no supported Substack module/API is available, do not use scraped/private endpoints. Instead:
     - keep Kit as the captured source of truth;
     - send internal notification or write a Google Sheet row for new subscribers;
     - batch import/export to Substack manually until an approved sync path exists.
7. Add a `Webhook response` module at the end:
   - success response: `200` with `{ "ok": true }`;
   - validation failure: `400` with a short error;
   - downstream failure: `500` or a friendly error response, depending on Webflow UX.

### Error Handling

- If Kit succeeds and Substack fails, do not lose the subscriber. Keep the Kit subscriber/tag and log the Substack failure for retry.
- Add a Make error handler route that writes failures to one of:
  - Google Sheet;
  - Airtable;
  - Slack/email alert;
  - Make data store.
- Store at minimum: email, timestamp, source page, failed step, error message.
- Avoid logging sensitive tokens or API keys.

### Webflow Implementation Notes

Keep the visual design in Webflow/TDP styles. Do not embed a generic Kit form if it breaks the visual system.

Recommended Webflow form fields:

```html
email
first_name
source_page
cta_location
lead_magnet
utm_source
utm_medium
utm_campaign
```

Recommended hidden values for `/pause-playbook`:

```html
source_page=/pause-playbook
cta_location=pause_playbook_hero
lead_magnet=pause_playbook
```

After the real Make webhook exists, update the frontend form action to that webhook URL and remove placeholder handling.

### Decisions Needed Before Build

1. Kit API access method:
   - Make native Kit connection, or
   - HTTP module with Kit API token.
2. Kit tag name:
   - recommended: `lead_magnet_pause_playbook`.
3. Kit sequence/form:
   - sequence that sends the playbook, or
   - form incentive email, or
   - immediate Make email.
4. Substack sync method:
   - native Make/Substack module if available;
   - approved Substack import/API path;
   - temporary manual CSV import.
5. Success UX:
   - redirect to a thank-you state/page, or
   - inline success message and download panel.

### References Checked

- Make custom webhooks can create a URL that external forms can call, and webhooks can trigger scenarios immediately.
- Make supports a `Webhook response` module for custom responses.
- Kit's API supports creating/upserting subscribers, tagging subscribers, and adding subscribers to sequences/forms after they exist.
- Substack subscriber automation must be confirmed in the actual Substack/Make account before implementation; avoid undocumented endpoints.

## Exact Frontend Swap Needed

Once the live endpoint is available:

1. Replace `action="#kit-placeholder"` with the real endpoint/action.
2. Remove `data-kit-placeholder="true"` or set it to `false`.
3. Confirm the email input name matches the backend requirement:

```html
<input type="email" name="email_address" ...>
```

4. If Kit requires additional hidden fields/tags, add them inside the form.

Example placeholders for future hidden fields:

```html
<input type="hidden" name="tags" value="pause-playbook" />
<input type="hidden" name="source" value="tdp-pause-playbook" />
```

## Open Dependencies

- Final lead magnet asset. Current download file is `downloads/pause-playbook-placeholder.pdf`.
- Real Kit/backend form endpoint.
- Confirmation of whether Kit or Substack is the source of truth for subscribers.
- If Substack is updated from the backend, confirmation of the sync method/API/automation.

## Recommendation

Keep `/pause-playbook` as the lead magnet landing page and point CTAs to it. Do not convert the homepage hero into an email form until the dedicated page has been reviewed and the backend capture workflow is live.
