# Hbml Vscode Extension

 On the road to eliminating the use of Html. End goal is to be compatible with all existing html as ui languages, i.e. Angular.

## Credits

This ain't my idea, the original idea is from <https://github.com/heyitsdoodler/hbml>, please visit for latest syntax

## To Clone
```git clone --recurse-submodules https://github.com/DanWlker/hbml-parser-vscode.git```

## Backlogs

1. Implement parsers
2. Batch convert html to hbml for existing projects
3. Generate all html/hbml to a folder/same folder (let user decide or smt)
4. Syntax highlighting
5. Optional commas at end of line for indentation like how dart and flutter does it
6. Auto generate code chunks
7. Include imports at top of page to allow jump to file (should support ts and js, for angular as well)
8. Importable html componenets, for ex. redefining :root as something else:

    ```
    :root = html[....]
    :component1 = div[...]

    :root {
        :div {

        }
    }
    ```
