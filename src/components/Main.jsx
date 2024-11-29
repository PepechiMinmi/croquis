import Level from "./homecontents/Levelbar";//ウェルカムテキスト
import Time from "./homecontents/Timebar";//画像サイドバー
import Repo from "./homecontents/Report";

export default function Main(){
    return(
        <main>
            <Level/>
            <Time/>
            <Repo/>
        </main>
    );
}