import { TweetPost } from "@/components/tweet/tweet-post";
import { TweetItem } from "@/components/tweet/tweet.item";
import { GeneralHeader } from "@/components/ui/general-header";
import { answerTweetExample, tweet } from "@/data/tweet";

export default function Page() {
    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg">Voltar</div>
            </GeneralHeader>
            <div className="border-t-2 border-gray-900">
                <TweetItem tweet={tweet} />
                <div className="border-y-8 border-gray-900">
                    <TweetPost />
                </div>
                {answerTweetExample.map((item, i) => {
                    return <TweetItem key={i} tweet={item} hideComments />;
                })}
            </div>
        </div>
    );
}
