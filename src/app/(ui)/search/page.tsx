import { TweetItem } from "@/components/tweet/tweet.item";
import { GeneralHeader } from "@/components/ui/general-header";
import { SearchInput } from "@/components/ui/search-input";
import { searchExampleTweet } from "@/data/tweet";

export default function Page() {
    return (
        <div>
            <GeneralHeader backHref="/">
                <SearchInput />
            </GeneralHeader>
            <div className="border-t-2 border-gray-900">
                <TweetItem tweet={searchExampleTweet} />
            </div>
        </div>
    );
}
