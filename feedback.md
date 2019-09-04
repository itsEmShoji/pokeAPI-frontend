

## Emily Shoji

##### https://github.com/lmu-cmsi370-fall2017/web-front-end-itsEmShoji.git

| | Feedback | Points | Notes |
| --- | --- | ---: | --- |
| **Web Service Functions (_3b_, _4a_, _4b_, _4d_)** | 3 API calls seen, all generally implemented correctly. One tiny nitpick: the `ResultContainer` variable should start with a little `r`—most JavaScript variables should start with a lowercase letter unless they are “class” objects or constants. | 49 | Missed naming convention |
| **Web App Layout (_2b_, _3a_, _3b_, _4a_, _4b_, _4d_)** | Pleasant and relatively intuitive design although results display is somewhat rudimentary. With all those stats, a table display with different font styles would really improve readability.<br><br>The API can be pokey (not your fault) so the user interface should provide some feedback on whether stuff is still loading (that, you can do something about). This way the user isn’t wondering whether something is done.<br><br>Errors or empty searches are also not handled by the UI; 404’s etc. do show up in the console, but most people won’t have Developer Tools open.<br><br>Finally, there are multiple issues with search-by-type. First, I’m no Pokémon expert, but aren’t there just a limited number of types? In that case, instead of a free-text input field, a drop-down `select` element would prevent errors better. Second, successive type searches don’t clear the previous one, meaning that the listed Pokémon just keep adding up. Third, some searches (try “electric”) result in a bunch of `undefined` list items. That should probably be investigated. | 21 | Need better handling of 404’s; search-by-type might be better as a dropdown (and has a couple of bugs); long latency emphasizes the need for feedback |
| **Test Suite (_4a_, _4b_, _4d_)** | 13 successes out of 13 tests—nearly complete coverage with the missed area being a single cohesive block…i.e., just a _little_ more code (specifically, one more mock response) would have gotten to 100%<br><br>**Statements** 56/62 (90.32%)<br>**Branches** 2/2 (100.00%)<br>**Functions** 2/3 (66.67%)<br>**Lines** 53/59 (89.83%) | 18 | Generally great coverage, but the untouched code is the entire nested call when loading individual Pokémon results—coverable by sending just one more mock response after the search
| **Code Style (_4c_)** | no errors |  |  |
| **Version Control (_4e_)** | 14 commits |  |  |
| **Punctuality (_4f_)** | on time (extension granted) |  |  |
|  |  | **88** | **Total** |
