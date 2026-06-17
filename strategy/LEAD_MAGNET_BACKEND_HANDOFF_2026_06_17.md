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

CTA routing now points acquisition traffic to `/pause-playbook`:

- Homepage hero primary CTA points to `/pause-playbook`.
- Active public page footer CTAs point to `/pause-playbook`.
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
