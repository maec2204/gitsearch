'use server'

import { getTranslations } from "next-intl/server";
import { revalidatePath } from "next/cache";

export const fetchUser = async (username: string) => {
    const t = await getTranslations('Index');
    try {
        const fetchUrl = `https://api.github.com/users/${username.trim()}`;
        const response = await fetch(fetchUrl);
        revalidatePath('/')
        return response.json();
    } catch (error) {
        console.error(t('fetchError'), error);
        throw error;
    }
};

export const fetchUserRepos = async (username: string) => {
    const t = await getTranslations('Index');
    try {
        const fetchUrl = `https://api.github.com/users/${username.trim()}/repos`;
        const response = await fetch(fetchUrl);
        revalidatePath('/')
        return response.json();
    } catch (error) {
        console.error(t('fetchError'), error);
        throw error;
    }
};