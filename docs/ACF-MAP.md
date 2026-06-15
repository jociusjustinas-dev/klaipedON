# KlaipedON ACF Map

Žemiau pateikta pradinė ACF struktūra, kurią vėliau bus galima tikslinti pagal Figma dizainą ir realų turinį.

## Hero

- `hero_eyebrow`
- `hero_title`
- `hero_text`
- `hero_primary_cta_label`
- `hero_primary_cta_url`
- `hero_secondary_cta_label`
- `hero_secondary_cta_url`
- `hero_stats` repeater
- `hero_stats.value`
- `hero_stats.label`

## About

- `about_eyebrow`
- `about_title`
- `about_text`

## Features

- `features_eyebrow`
- `features_title`
- `feature_cards` repeater
- `feature_cards.eyebrow`
- `feature_cards.title`
- `feature_cards.text`

## Process

- `process_eyebrow`
- `process_title`
- `process_steps` repeater
- `process_steps.title`
- `process_steps.text`

## Contact

- `contact_eyebrow`
- `contact_title`
- `contact_text`
- `contact_email`
- `contact_phone`
- `contact_form_shortcode`

## Pastabos WordPress developeriui

- CTA URL laukai turi būti laikomi atskirai nuo label laukų
- Jei sekcijų kiekis ateityje keisis, verta svarstyti `Flexible Content`
- Jei projektas liks vieno landing page pobūdžio, pakaks vieno options puslapio arba vieno puslapio field group
