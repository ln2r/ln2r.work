import { env } from "$env/dynamic/public";
const { PUBLIC_API_BASE } = env;

export class Mugunghwa {
    constructor(private readonly fetchFn: typeof fetch = fetch) {}

    async works() {
        try {
            const res = await this.fetchFn(`${PUBLIC_API_BASE}/works`);
            const items = await res.json();

            const chunk = 2;

            const grouped: any[] = [[], []];
            const groupCount = Math.ceil(
                (items.length === 0 ? 1 : items.length) / 2,
            );

            for (let i = 0, l = groupCount; i < l; i++) {
                grouped[i] = items.splice(0, chunk);
            }

            return grouped;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async writings() {
        try {
            const res = await this.fetchFn(`${PUBLIC_API_BASE}/writings`);
            return await res.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async writing(slug: string) {
        try {
            const res = await this.fetchFn(
                `${PUBLIC_API_BASE}/writings/` + slug,
            );
            return await res.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async authCallback(code: string) {
        try {
            const res = await this.fetchFn(
                `${PUBLIC_API_BASE}/auth/oauth/callback?code=` + code,
            );
            return await res.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}
