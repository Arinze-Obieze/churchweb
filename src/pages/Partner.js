import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Partner = () => {
  return (
    <div className="flex justify-center px-[32px] space-x-9">
      <div>
        <div className="">
          <div className="px-6 md:px0">
            <h1 className="mt-12 mb-8 text-3xl text-center text-gray-700">
              Monthly Partnership
            </h1>

            <div className="md:grid md:mt-24 md:grid-cols-2">
              <img src="/assets/partner.jpg" alt="" className="md:w-[400px]" />
              <div>
                <h3 className="text-left mt-6  mb-3 ">
                  <strong className="md:text-lg">
                    Join Pastor Nwite Nwabueze Jeremiah
                  </strong>{" "}
                  and Victory Resounding Revival Ministries in transforming
                  lives and spreading the message of Christ worldwide. Through
                  dynamic media outreach, feeding outreach and impactful events,
                  we are dedicated to winning souls and guiding believers on
                  their faith journey.
                </h3>
                <h3>
                  By partnering with us, you become part of a community
                  committed disciple making a difference and bringing hope to
                  countless hearts. Together, let’s be the hands and feet of
                  Christ and change the world, one life at a time.Join us today!
                </h3>
                <hr class="border-t border-gray-400 mt-4 md:mt-12 mb-4 mx-auto w-[85%]" />
              </div>
            </div>
          </div>

          {/* <div>

                    <div className="mx-6 bg-gray-100 text-center text-gray-700">
                        <BOX>PARTNER PLAN 1</BOX>
                        <h1 className="text-center mt-6 text-gray-700 ">REACH 225 PEOPLE A MONTH*</h1>
                        <h2 className="flex justify-center mt-3 place-items-center mb-3 text-xl text-center">
                            <span   >
                                <sup className="text-md relative right-10 top-7 text-4xl">$</sup>
                                <h1 className="text-6xl">15</h1>
                            </span>
                            <span> /month</span>
                        </h2>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>10% DHM Store Discount</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>Monthly Partner Zooms</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>Dove Lapel Pin</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>Reserved Seating at DHM Events</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>Partner Meet-and-Greet Access</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        Invitation to Partners-Only Retreat
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />

                        <button className="border-2 border-blue-500 py-3 px-6 text-blue-600 text-xl hover:bg-blue-500 hover:text-white ">PARTNER</button>
                    </div>

                    {/* 2 */}
          {/* <div className="mx-6 mt-12 bg-gray-100 text-center text-gray-700">
                        <BOX>PARTNER PLAN 2</BOX>
                        <h1 className="text-center mt-6 text-gray-700 ">REACH 450 PEOPLE A MONTH*</h1>
                        <h2 className="flex justify-center mt-3 place-items-center mb-3 text-xl text-center">
                            <span   >
                                <sup className="text-md relative right-12 top-7 text-4xl">$</sup>
                                <h1 className="text-6xl">35</h1>
                            </span>
                            <span> /month</span>
                        </h2>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>10% DHM Store Discount</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>Monthly Partner Zooms</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>Dove Lapel Pin</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>Reserved Seating at DHM Events</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        <h4>Partner Meet-and-Greet Access</h4>
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />
                        Invitation to Partners-Only Retreat
                        <hr class="border-t border-gray-900 mt-4 mb-4 mx-auto " />

                        <button className="border-2 mb-6 border-blue-500 py-3 px-6 text-blue-600 text-xl hover:bg-blue-500 hover:text-white ">PARTNER</button>
                    </div> */}
        </div>

        {/* <div className="mt-12 mb-6 px-5">
                    <h1 className="text-center text-xl text-gray-700 ">For those who wish to customize their monthly partnership, here
                        is a custom monthly amount option. </h1>
                    <button className="bg-blue-600 text-white  font-semibold mx-auto block py-3 mt-6 px-6">CUSTOM MONTHLY AMOUNT</button>
                </div>
                <hr class="border-t border-gray-400 mt-4 mb-4 mx-auto w-[85%]" />
                <div className="px-5 mt-12  mb-6">
                    <h1 className="text-center text-xl text-gray-700 ">For those who consider DHM their Church, here is an option for automatic
                        tithing. You may customize the amount to reflect your tithe.</h1>
                    <button className="bg-blue-600 text-white  font-semibold mx-auto block py-3 mt-6 px-6">AUTOMATIC TITHING</button>
                </div> */}

        {/* <hr class="border-t border-gray-400 mt-4 mb-4 mx-auto w-[85%]" /> */}

        {/* <div>
                    <h1 className="text-2xl text-gray-800 text-center mt-12 mb-6">Partner Perks</h1>
                    <div className="px-5">
                        <h2 className="text-xl text-gray-700 mt-6 leading-7 font-light"> <span className=" font-bold text-gray-700 ">*Reach:</span> Based on our current media reach, we conservatively estimate that 15 people hear the Word of God for every $1 a partner gives monthly. (Numbers based on internal analysis performed in May 2022).</h2>

                        <h2 className="text-xl text-gray-700 mt-6 leading-7 font-light"><span className="text-xl font-bold text-gray-700 ">Store Discount:</span> Your ministry store discount can be used at our website shop and includes discounts on limited edition merch drops.</h2>

                        <h2 className="text-xl text-gray-700 mt-6 leading-7 font-light"><span className="text-xl font-bold text-gray-700 ">Monthly Partner Zooms:</span> Once a month, you’ll be invited to join David Diga Hernandez and Steven Moctezuma for a partners-only interactive video call to receive updates, prayer, and a live message.</h2>

                        <h2 className="text-xl text-gray-700 mt-6 leading-7 font-light"><span className="text-xl font-bold text-gray-700 ">Dove Lapel Pin:</span> Show your support of the gospel with our beautiful dove lapel pin. Hint: You can wear this to ministry events for book table discounts.</h2>

                        <h2 className="text-xl text-gray-700 mt-6 leading-7 font-light"><span className="text-xl font-bold text-gray-700 ">Reserved Seating at DHM Events:</span> All of our events are free of charge thanks to your monthly support. So as a show of gratitude, we reserve seating for our partners and their loved ones at all DHM events.</h2>
                        <h2 className="text-xl text-gray-700 mt-6 leading-7 font-light">
                            <span className="text-xl font-bold text-gray-700 "> Partner Meet-and-Greet Access:</span> At select ministry events, David and Steven will host after-service meet-and-greets exclusively for you, our ministry partners. Partners may bring loved ones to participate in the meet-and-greets.
                        </h2>


                        <h2 className="text-xl text-gray-700 mt-6 leading-7 font-light">
                            <span className="text-xl font-bold text-gray-700 ">    Invitation to Partners-Only Retreat:</span> All monthly partners receive an invitation to our annual partner retreat located in Austin, TX. The retreat will be a refreshing time of ministry, worship, prayer, and fellowship.
                        </h2>

                        <h2 className="text-xl text-gray-700 mt-6 leading-7 font-light">
                            <span className="text-xl font-bold text-gray-700 ">  Signed Book(s):</span> If your partnership plan includes a free book, we will select and send your signed book(s) from David’s catalogue of authored works. The specific book(s) title you receive will be selected by our team at random.
                        </h2>

                    </div>
                    <hr class="border-t border-gray-400 mt-4 mb-4 mx-auto w-[85%]" />

                    <div className="text-gray-600 text-xl px-5 space-y-6">
                        <h1 className="text-2xl text-gray-800 text-center mt-12 mb-6">FAQs</h1>
                        <div>
                            <h1 className="font-semibold">Q: If I customize my monthly giving amount, do I still receive the partner perks? </h1>
                            <h1>A: Yes. The partner perks will vary based upon in what plan your custom amount lands.</h1>
                        </div>
                        <div>
                            <h1 className="font-semibold">Q: What if I want to cancel my monthly partnership?</h1>
                            <h2>A: You can cancel or pause your monthly partnership at any time by calling or emailing our ministry.</h2>
                        </div>

                    </div>

                </div>
*/}
        <h4 className="text-xl mt-12 text-center font-light text-gray-700">
          Still have a question? Send us an message by{" "}
          <a
            target="_blank"
            href="https://wa.me/message/BFZQZ3QMSZ5KM1"
            className="text-blue-500"
          >
            clicking here
          </a>
          .
        </h4>
      </div>
    </div>
  );
};

export default Partner;

const BOX = styled.h1`
  background-color: blue;
  color: white;
  padding: 1.95rem 1.5rem;
  text-align: center;
  border: none;
  cursor: pointer;

  font-size: 20px;
  font-weight: bold;
`;
