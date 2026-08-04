"use client";

import { useDocsSearch } from "fumadocs-core/search/client";
import { flexsearchStaticClient } from "fumadocs-core/search/client/flexsearch-static";
import {
    SearchDialog,
    SearchDialogClose,
    SearchDialogContent,
    SearchDialogHeader,
    SearchDialogIcon,
    SearchDialogInput,
    SearchDialogList,
    SearchDialogOverlay,
    type SharedProps,
} from "fumadocs-ui/components/dialog/search";

const searchClient = flexsearchStaticClient();

export default function StaticSearchDialog(props: SharedProps) {
    const {
        search,
        setSearch,
        query,
    } = useDocsSearch({
        client: searchClient,
    });

    const results = query.data === "empty"
        ? null
        : query.data;

    return (
        <SearchDialog
            search={search}
            onSearchChange={setSearch}
            isLoading={query.isLoading}
            {...props}
        >
            <SearchDialogOverlay />

            <SearchDialogContent>
                <SearchDialogHeader>
                    <SearchDialogIcon />
                    <SearchDialogInput />
                    <SearchDialogClose />
                </SearchDialogHeader>

                <SearchDialogList items={results} />
            </SearchDialogContent>
        </SearchDialog>
    );
}