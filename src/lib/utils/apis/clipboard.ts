import { env } from "$env/dynamic/public";
import type { Session } from "../session";
const { PUBLIC_API_BASE } = env;

export interface ClipboardAdd {
    title: String;
    body: String;
    description?: String | null;
}

export interface ClipboardUpdate extends ClipboardAdd {
    id: String;
}

export class Clipboard {
    constructor (
        private readonly fetchFn: typeof fetch = fetch,
        private readonly session?: Session,
    ) {}

    async list() {
        try {
            const res = await this.fetchFn(`${PUBLIC_API_BASE}/clipboards`);
            const body = await res.json();

            return body.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getOneById(id: string) {
        try {
            const res = await this.fetchFn(`${PUBLIC_API_BASE}/clipboards/${id}`, {
                cache: "no-store",
            });
            const body = await res.json();

            return body.data;
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async add(body: ClipboardAdd) {
        try {
            const res = await this.session?.process(`${PUBLIC_API_BASE}/clipboards`, 'POST', body)

            return res;
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async update(id: string, body: ClipboardUpdate) {
        try {
            const res = await this.session?.process(`${PUBLIC_API_BASE}/clipboards/${id}`, 'PATCH', body)

            return res;
        } catch (err) {
            console.error(err);
            return err;
        }
    }
}