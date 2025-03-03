import { Future, Ok, Err } from "../utils/monads";
import { cli } from "./cli";
import { Terminal, window } from "vscode";
import * as semver from "semver";

export namespace buildMod {
    let terminal: undefined | Terminal;

    export async function buildMod(): Future {
        try {
            // close the terminal if one is already open
            if (terminal) {
                terminal.dispose();
            }
            terminal = window.createTerminal(
                "Geode Build",
                cli.getCLIPath(),
                ["build"],
            );
            terminal.show();
            return Ok();
        } catch (e) {
            return Err((e as Error).message);
        }
    }
}
