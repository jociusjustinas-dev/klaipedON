# KlaipedON Handoff

Šitas projektas sąmoningai kuriamas kaip tarpinis sluoksnis tarp dizaino/prototipo ir būsimos WordPress temos.

## Techninis principas

- Frontend sluoksnis: `HTML + Tailwind CSS + minimalus vanilla JS`
- Tikslas: greitas dizaino iteravimas be sunkios framework priklausomybės
- Handoff tikslas: kad WordPress developeris galėtų sekcijas perkelti į `template-parts` arba ACF blokus

## Kodėl ne React

- Čia nereikia SPA logikos
- WordPress integracijoje paprastas HTML daug lengviau transformuojamas į PHP partialus
- ACF pagrindu valdomam turiniui semantinis markup yra svarbiau nei front-end framework abstrakcijos

## Rekomenduojama WordPress integracijos kryptis

- `header`, `footer`, `hero`, `about`, `feature-grid`, `process`, `contact` dalinti į atskirus partial failus
- Dizaino tokenus iškelti į temos CSS kintamuosius arba `theme.json`, priklausomai nuo pasirinkto build setup
- Interakcijas palikti mažas ir izoliuotas, kad būtų paprasta perkelti į temos JS failą

## HTML žymėjimo konvencijos

- `data-wp-partial` nurodo numatomą WordPress partial kelią
- `data-acf-field` nurodo vienetinį lauką
- `data-acf-repeater` nurodo repeater tipo turinį
- `data-acf-sub-field` nurodo repeater įrašo vidinį lauką

## Rekomenduojama rankoff seka

1. Užbaigti Figma dizainą pagal šitą section-first struktūrą
2. Sulyginti galutinį HTML su realiomis sekcijomis ir ACF poreikiu
3. Paruošti galutinį `docs/ACF-MAP.md`
4. Perduoti developer'iui kartu su dizainu, HTML preview ir turinio modeliu
