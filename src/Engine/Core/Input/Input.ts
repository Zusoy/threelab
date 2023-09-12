import { KeyCode } from './KeyCode';

export class Input
{
    private keys: Record<KeyCode,boolean> = {
        [KeyCode.KeyA]: false,
        [KeyCode.KeyD]: false,
        [KeyCode.Space]: false
    };

    private constructor() {}

    public static initFromBrowserWindow(browserWindow: Window): Input
    {
        const input = new Input();

        browserWindow.addEventListener('keydown', event => {
            const gameKeyCodes = Object.values(KeyCode).map(key => key.toString());

            if (gameKeyCodes.includes(event.code)) {
                input.setKeyStatus(KeyCode[event.code as keyof typeof KeyCode], true);
            }
        });

        browserWindow.addEventListener('keyup', event => {
            const gameKeyCodes = Object.values(KeyCode).map(key => key.toString());

            if (gameKeyCodes.includes(event.code)) {
                input.setKeyStatus(KeyCode[event.code as keyof typeof KeyCode], false);
            }
        });

        return input;
    }

    protected setKeyStatus(key: KeyCode, status: boolean): void
    {
        this.keys[key] = status;
    }

    public getKey(code: KeyCode): boolean
    {
        return this.keys[code];
    }
}