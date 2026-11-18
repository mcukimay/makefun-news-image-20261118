# The World Today — 18 November 2026

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/mcukimay/makefun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/mcukimay/makefun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

A newspaper front page summing up Wednesday 18 November 2026 in one
image: the US–Iran tanker war in the Gulf, North Korea's missile launch
toward the Sea of Japan, the COP31 climate deadlock in Antalya, the UN's
warning of more cold deaths in Gaza, the Knesset electing an Eisenkot
ally as speaker, and the magnitude 5.3 earthquake in Romania.

## The image

`entry.png.b64` holds the 1024×1024 PNG (drawn with Python PIL:
masthead, six story panels, vector-style illustrations, real rendered
font text throughout — no AI-generated imagery). `main.ts` decodes it
and writes it to `/output/entry.png`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Both runs write byte-identical output. No network, standard library
only, Node 22.

## Sources

Al Jazeera, Reuters, US CENTCOM statements, USGS — all events reported
on 18 November 2026.
