# Awesome Nano Banana Pro Prompts

This repository is Image Prompt Gallery's public, source-attributed Nano Banana Pro dataset target. It documents the open schema and attribution contract while the export contains no reviewed public prompt records. Browse the live model library for current examples; this repository will only publish records after they pass the public-source and reuse checks.

- Web gallery: https://imagepromptgallery.com/prompts
- Nano Banana Pro prompt library: https://imagepromptgallery.com/models/nano-banana-pro/prompts
- Source and maintenance record: https://imagepromptgallery.com/sources/banana-prompts
- Public API: https://imagepromptgallery.com/api/public/prompts?domain=image&model=nano-banana-pro
- Open repository: https://github.com/Toolcentral-ai/awesome-nano-banana-pro-prompts
- Dataset status: limited, 0 exported prompts
- Schema version: `2026-06-30`

## Browse by Model and Category

- [Nano Banana Pro prompt library](https://imagepromptgallery.com/models/nano-banana-pro/prompts)
- [All curated prompt topics](https://imagepromptgallery.com/prompts)
- [Image prompt sources](https://imagepromptgallery.com/sources)

No topic pack is labelled as Nano Banana Pro-specific until at least five reviewed, model-attributed cases qualify for that pack. This avoids publishing thin or misleading category pages.

## Featured Prompts

No prompts are exported yet. Featured entries will be selected only from reviewed public cases with a usable result, source attribution, and model evidence. The absence of examples is intentional and must not be replaced with synthetic counts or placeholder prompts.

## Data Files

- `data/nano-banana-pro-prompts.json`: versioned open prompt bundle; currently empty.
- `data/categories.json`: category index; currently empty.
- `data/source-prompts.json`: public source handoff metadata; currently empty.
- `schema/nano-banana-pro-image-prompt.schema.json`: JSON schema.
- `examples/read-prompts.mjs`: minimal Node reader.

## JSON Schema and Public Fields

Validate exports with `schema/nano-banana-pro-image-prompt.schema.json`. Top-level fields are `schemaVersion`, `generatedAt`, `source`, `count`, and `prompts`. Published prompt records may include public IDs and slugs, title, category and tags, model and input mode, prompt text, public media, source attribution, and a reuse-risk notice. Private review fields, GSC metrics, ranking weights, internal source URLs, and API credentials are never exported.

## Attribution, Opt-out, and Commercial Reuse

Prompt data is normalized by Image Prompt Gallery, but each prompt and media asset retains its own rights context. Commercial use requires item-level review of the original source, model-provider terms, brands, packaging, likenesses, privacy, and media rights. To correct attribution or request removal, [open an issue](https://github.com/Toolcentral-ai/awesome-nano-banana-pro-prompts/issues) with the public case URL and evidence. Maintainers will review the source record before updating the repository and web gallery.

## Contribution

Open an issue or pull request with a public source URL, attribution notes, Nano Banana Pro model evidence, and a short explanation of why the prompt is reusable. Submissions are reviewed before they appear in the open bundle.
