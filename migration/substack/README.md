# TDP Newsletter Migration Cleanup

Source file: `6879c06732ea67b4f3e0c21d-687a177f60169b3d21f53c59-2026-05-22T07-58-39-698Z.csv`

Generated files:

- `tdp-newsletter-cleaned-master.csv`: canonical cleaned export from old Webflow CMS.
- `tdp-newsletter-substack-import.csv`: flattened post file for Substack import testing.
- `tdp-newsletter-webflow-shaped-for-substack.csv`: cleaned file that keeps Webflow's original column shape, for Substack's Webflow importer.
- `tdp-newsletter-cleanup-audit.csv`: row-by-row audit of status, word count, missing metadata, and which Webflow fields were merged.

Counts:

- Source rows: 40
- Included for Substack: 39
- Excluded archived rows: 1
- Rows originally marked draft in Webflow but included: 8

Important notes:

- The original Webflow CSV is untouched.
- The one archived row was excluded from the Substack import file.
- Draft rows were included because they appear to include the missing newsletter essays we specifically wanted to preserve.
- Try `tdp-newsletter-webflow-shaped-for-substack.csv` first if Substack asks for a Webflow export. Try `tdp-newsletter-substack-import.csv` if it asks for a generic posts CSV. If both fail, use `tdp-newsletter-cleaned-master.csv` as the copy-safe source and import/post manually in batches.
- Imported Substack posts should appear as web posts first. Do not import this as a subscriber list.
