# Lead Magnet Handoff

Date: 2026-06-17

## What We Decided

We should keep one proper lead magnet page:

`/pause-playbook`

This gives us one clean link to use from the homepage, footer, articles, LinkedIn, Instagram, etc.

The homepage should still stay focused on the main TDP positioning. The playbook page can do the actual email capture job.

## What Exists Right Now

The page is already built here:

`pause-playbook.html`

The live route should be:

`https://www.thedeliberatepause.com/pause-playbook`

Right now the page has:

- the current TDP header and footer
- lead magnet copy
- an email form
- a success message after submit
- a download panel after submit
- basic tracking events in `window.dataLayer`
- page metadata
- `/pause-playbook` added to `sitemap.xml`

CTA setup right now:

- Homepage has both `Subscribe` and `Get the playbook`.
- Footers have both `Subscribe` and `Get the playbook`.
- Header Subscribe still goes straight to Substack.
- `Get the playbook` goes to `/pause-playbook`.

## Current Form State

The form is not connected to Kit or Make yet. That is intentional.

Current form:

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

Because it is still a placeholder, submitting the form does not send the email anywhere. It only:

- stops the default form submit
- fires a tracking event
- shows the user a success message
- reveals the playbook download link

This is fine for now. No point doing the full Kit setup on the static site if we are moving this to Webflow.

## Tracking

The page currently fires these events:

| Event | When | Fields |
|---|---|---|
| `kit_form_view` | Form is shown | `page_path`, `page_title`, `cta_location`, `lead_magnet` |
| `kit_form_submit_attempt` | Placeholder form is submitted | `cta_text`, `cta_location`, `lead_magnet` |
| `kit_form_submit` | Real form is submitted | Same fields, once placeholder is removed |
| `lead_magnet_download` | Download link is clicked | `cta_text`, `cta_location`, `lead_magnet`, `destination_url` |

Lead magnet value:

`pause_playbook`

Main CTA location:

`pause_playbook_hero`

## Backend Plan

The cleanest setup later is:

`Webflow form -> Make webhook -> Kit -> Substack if needed`

Make can act as the backend. We do not need to build a custom backend just for this.

My recommendation:

- Kit should be the main place where lead magnet subscribers are stored.
- Kit should tag these people as playbook subscribers.
- Kit should send the playbook email or trigger the right sequence.
- Substack sync should only be added if there is a clean supported way to do it.
- We should not use unofficial Substack endpoints or hacks.

## Make Setup Notes

In Make, create a scenario called something like:

`TDP - Pause Playbook Signup`

The flow should be:

1. Webflow form submits to a Make custom webhook.
2. Make checks that the email is valid.
3. Make adds or updates the subscriber in Kit.
4. Make applies the Kit tag.
5. Make adds the subscriber to the playbook sequence or form in Kit.
6. Make tries to sync to Substack only if there is a supported way to do that.
7. Make sends a success response back to Webflow.

## Form Fields We Should Send

From Webflow, the form should send:

| Field | Needed? | Notes |
|---|---:|---|
| `email` or `email_address` | Yes | Make should trim it and lowercase it. |
| `first_name` | Optional | Only if we decide to ask for name. |
| `source_page` | Useful | Example: `/pause-playbook`. |
| `cta_location` | Useful | Example: `pause_playbook_hero`, `footer`, `homepage_hero`. |
| `lead_magnet` | Useful | Use `pause_playbook`. |
| `utm_source`, `utm_medium`, `utm_campaign` | Optional | Keep these if available. |

Hidden values for the playbook page:

```html
source_page=/pause-playbook
cta_location=pause_playbook_hero
lead_magnet=pause_playbook
```

## Kit Setup

In Kit, we need:

- a tag for this lead magnet
- a sequence or form that sends the playbook
- confirmation on whether Kit is also sending the Monday Letter, or whether Substack stays as the newsletter tool

Suggested tag:

`lead_magnet_pause_playbook`

Suggested source tags:

```text
source_webflow
source_homepage
source_footer
```

The ideal setup is that Kit sends the playbook email, because then the delivery and email analytics live in Kit.

## Substack Sync

This part needs checking inside the actual Make/Substack account.

If Make has a clean Substack module that can add a subscriber, we can use that after Kit succeeds.

If there is no clean supported method, then we should not force it.

In that case:

- keep Kit as the captured subscriber list
- log the subscriber in a Google Sheet if needed
- batch import to Substack manually until we find a proper sync method

Important: if Kit succeeds and Substack fails, we should not lose the email. Kit should remain the backup record.

## Error Handling

Make should log any failed signups somewhere simple:

- Google Sheet
- Airtable
- Slack/email alert
- Make data store

At minimum, log:

- email
- timestamp
- source page
- CTA location
- failed step
- error message

Do not log API keys or private tokens.

## Webflow Notes

Keep the form visually designed in Webflow/TDP style.

Do not embed a default Kit form if it looks off-brand.

Better setup:

- Webflow controls the design
- Make handles the backend
- Kit handles subscriber storage and delivery
- Substack stays as the newsletter destination if needed

Once the Make webhook is ready, update the form action from:

```html
action="#kit-placeholder"
```

to the real Make webhook URL.

Then remove:

```html
data-kit-placeholder="true"
```

or set it to:

```html
data-kit-placeholder="false"
```

## Things Avi Needs To Confirm

Before this is fully wired, we need:

1. Final playbook PDF or asset.
2. Whether Kit or Substack is the main subscriber list.
3. Kit tag name.
4. Kit sequence or form name.
5. Whether Substack sync is needed immediately.
6. Whether Webflow native forms can post directly to the Make webhook, or if we need a small custom embed.
7. Final success state: inline message, thank-you page, or direct download.

## Useful References Checked

- Make custom webhooks can create a URL that forms can post to.
- Make can send a webhook response back to the form.
- Kit supports creating/updating subscribers, tagging subscribers, and adding subscribers to forms/sequences.
- Substack automation still needs to be checked in the real account. Do not assume an unofficial API.

## Recommendation

Do not spend time building the full Kit flow on the current static site.

Instead:

- keep `/pause-playbook` ready as the lead magnet page
- keep both CTAs visible
- move the real form wiring into Webflow
- use Make as the backend layer
- use Kit for capture and delivery
- add Substack sync only if there is a clean supported way to do it
