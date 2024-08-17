<script>
import axios from "axios";
import { globalMixin } from '@/mixins/globalMixin';

export default {
    name: "App",
    mixins: [globalMixin],
    data() {
        return {
            requestAPI: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
            searchQuery: '',
            word: {},
        };
    },
    watch: {
        searchQuery(newQuery) {
            this.getAnswer(newQuery);
        }
    },
    methods: {
        async getAnswer(searchQuery) {
            const { data } = await axios.get(this.requestAPI + searchQuery);
            this.word = data[0];
            console.log(this.word);
        },
        debouncedSearch() {
            $debounce(function() {
                if (this.input.length >= 2) {
                    this.getAnswer(this.input);
                }
            }, 300);
        }
    }
};
</script>

<template>
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Search words..."
        class="px-6 py-5"
    />

    <div>
        <div v-if="word && word.word">
            <h2 class="text-heading font-bold">{{ word.word }}</h2>
            <p>{{ word.phonetic }}</p>

            <div>
                <div v-for="meaning in word.meanings">
                    <p>{{ meaning.partOfSpeech }}</p>

                    <div>
                        <span>
                            Meaning
                        </span>
                        <ul v-for="definition in meaning.definitions">
                            <li>{{ definition.definition }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <p class="text-xl font-bold mb-6">No Definitions Found</p>
            <p class="text-base">
                Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again atlater time or head to the web instead.
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>
