import { styled } from "styled-components";
const Ministries = () => {
    return (
        <div className="flex justify-around ">

            <div className="hidden md:flex md:flex-col 
            md:place-items-center  mt-24 ml-12 ">
                <h1 className="text-2xl text-blue-500 ">About</h1>
                <h1>DAVID</h1>
                <h1>STEVEN</h1>
                <h1 className="text-black font-semibold">BELIEFS</h1>
                <h1>MINISTRIES</h1>
            </div>

            <div >
                <h1 className="text-center text-3xl mt-24 text-gray-900">MINISTRIES</h1>

                <div className="px-6 mt-12">
                    <img src="/assets/ministry.jpeg" alt="" />
                    <div >
                        <StyledH1>The Encounter TV Network</StyledH1>
                        <STYLEDH3>The Encounter TV network features the
                            teaching and healing ministry of David Diga
                            Hernandez and the worship ministry of Steven
                            Moctezuma. The ETV network is currently
                            available on YouTube, Vimeo, Apple TV, and
                            on the David Hernandez Ministries app.
                            Programs include Word and Spirit, Viral
                            Revival, Presence and Power, Worship, and
                            more.</STYLEDH3>
                    </div>
                </div>

                <div className="px-6 mt-12">
                    <img src="/assets/ministry1.jpg" alt="" />
                    <div>
                        <StyledH1>Encounter Services</StyledH1>
                        <STYLEDH3>At the encounter service, people encounter the presence and
                            power of the Holy Spirit in a unique way. God graces our meetings
                            with salvation, healing, deliverance, and the tangible presence
                            of the Holy Spirit. The encounter service features worship, the
                            word, and miracles. Anything can happen at these anointed
                            meetings.</STYLEDH3>
                    </div>

                    <div className="px-6 mt-12">
                        <img src="/assets/ministry2.jpg" alt="" />
                        <StyledH1>Word and Spirit</StyledH1>
                        <STYLEDH3>Word and Spirit is the discipleship program of David Hernandez
                            Ministries, a place where believers can receive encouragement,
                            edification, and prayer. Receive impartation from David. Word and
                            Spirit is available on the ETV Network.</STYLEDH3>
                    </div>

                    <div className="mt-12">
                        <img src="/assets/ministry3.jpg" alt="" />
                        <StyledH1>Worship Ministry</StyledH1>
                        <STYLEDH3 >Steven Moctezuma is an anointed worship leader and
                            song writer. His love for the presence of the Holy Spirit marks
                            his worship ministry. Gifted with a unique voice, Steven's
                            worship ministry is touching lives all around the world and
                            leading people into deeper encounters in God's presence. Steven
                            has partnered his worship ministry with David's evangelistic
                            ministry. Steven's worship ministry is available on the ETV
                            Network.
                        </STYLEDH3>
                    </div>



                    <div className="mt-12">
                        <img src="/assets/ministry4.jpg" alt="" />
                        <StyledH1>Encounter Podcast</StyledH1>
                        <STYLEDH3>The Encounter Podcast features weekly audio sermons from David Diga
                            Hernandez and offers all of its episodes for download on almost all
                            devices. Listeners can hear the Encounter Podcast on the DHM app
                            (Apple & Android)  or on this website. Best of all, because of our
                            World Changer Ministry partners, the Encounter Podcast is absolutely
                            free for both download and streaming.
                        </STYLEDH3>
                    </div>

                    <div className="mt-12">
                        <img src="/assets/ministry5.jpg" alt="" />
                        <StyledH1>David's Blog</StyledH1>
                        <STYLEDH3>David’s weekly blog is featured here on this website and on the
                            DHM app. This weekly blog features David's anointed writing on
                            topics like The Holy Spirit, Healing, Prayer, Spiritual Warfare,
                            Miracles, God's Presence, and more.</STYLEDH3>
                    </div>

                    <div className="mt-12">
                        <img src="/assets/Ministry5.jpg" alt="" />
                        <StyledH1>Live-streamed Events</StyledH1>
                        <STYLEDH3>We globally broadcast many of our services from around the
                            worldwide through livestreams. People can join from almost any
                            nation in the world and encounter the presence and power of the
                            Holy Spirit. Through live-streamed events, the power of the
                            Holy Spirit is sent right into the home.
                        </STYLEDH3>
                    </div>

                    <div className="mb-24 mt-12">
                        <img src="/assets/ministries6.jpg" alt="" />
                        <StyledH1 >Holy Spirit School</StyledH1>
                        <STYLEDH3>The Holy Spirit School online exists to raise a Spirit-filled people equipped to spread the gospel of Jesus Christ all around the world in the power of the Holy Spirit. The power of the Holy Spirit meets grounded, Biblical, balanced teaching in each course.</STYLEDH3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Ministries;

const StyledH1 = styled.h1`
font-size:24px;
color:rgb(31 45 65);
margin-bottom:8px;
margin-top:16px;

`
const STYLEDH3 = styled.h3`
font-size:18px;
font-weight:light;
color:rgb(31 45 65);

`