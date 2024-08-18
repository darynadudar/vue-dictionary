<script>
import axios from "axios";

import ThemeSwitcher from './components/ThemeSwitcher.vue'

export default {
    name: "App",
    components: {
        ThemeSwitcher
    },
    data() {
        return {
            requestAPI: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
            searchQuery: '',
            searchResult: {},
        };
    },
    methods: {
        async getAnswer() {
            const {data} = await axios.get(this.requestAPI + this.searchQuery);
            this.searchResult = data[0];
            console.log(this.searchResult);
        }
    }
};
</script>

<template>
    <header class="container-wrapper flex justify-between items-center">
        <a class="overflow-hidden w-10 md:w-auto" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38">
                <g fill="none" fill-rule="evenodd" stroke="#838383" stroke-linecap="round" stroke-width="1.5">
                    <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/>
                    <path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8"/>
                    <path d="M11 9h12"/>
                </g>
            </svg>
        </a>
        <ThemeSwitcher/>
    </header>

    <main class="container-wrapper pt-12">
        <form @submit.prevent="getAnswer" class="mb-11 relative">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Search words..."
                class="w-full px-6 py-5 bg-grey-1 dark:bg-grey-6 placeholder-black dark:placeholder-white rounded-2xl outline-none border border-transparent hover:border-purple"
            />
            <button type="submit" class="text-null absolute top-6 right-6">
                Search
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path fill="none" stroke="#A445ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/>
                </svg>
            </button>
        </form>

        <div>
            <div v-if="searchResult && searchResult.word">
                <div>
                    <h2 class="mb-2 text-heading font-bold">{{ searchResult.word }}</h2>
                    <p class="text-xl text-purple">{{ searchResult.phonetic }}</p>
                </div>

                <div>
                    <div v-for="meaning in searchResult.meanings" class="mt-10">
                        <p class="mb-10 text-xl font-bold italic">{{ meaning.partOfSpeech }}</p>

                        <div>
                            <h4 class="mb-6 text-grey-3">
                                Meaning
                            </h4>
                            <ul v-for="definition in meaning.definitions" class="list-disc pl-12 marker:text-purple">
                                <li class="">{{ definition.definition }}</li>
                            </ul>
                        </div>

                        <div v-if="meaning.synonyms.length">
                            <h4 class="text-grey-3">
                                Synonyms
                            </h4>

                            {{ meaning.synonyms }}
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>
                <p class="text-xl font-bold mb-6">No definition found</p>
                <p class="text-base">
                    Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search
                    again atlater time or head to the web instead.
                </p>
            </div>
        </div>
    </main>
</template>

<style>
body {
    margin-bottom: 124px;
}

.container-wrapper {
    margin: auto;
    width: 100%;
    max-width: 734px;
}
</style>
