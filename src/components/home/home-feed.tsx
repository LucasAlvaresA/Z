import { otherTweets, tweet } from "@/data/tweet";
import { TweetItem } from "../tweet/tweet.item";

export const HomeFeed = () => {
    return (
        <div>
            <TweetItem tweet={tweet} />
            {otherTweets.map((item, i) => {
                return <TweetItem key={i} tweet={item} />;
            })}
        </div>
    );
};
