const AboutMe = () => {
    return (
      <>
        <div className="p-4 md:px-[64px]">
          <div>
            <div className="md:grid md:grid-cols-2 ">
              <div className="max-w-[400px]">
                <img src="/pastor/1.jpg" alt="" className=" mx-auto mt-12" />
              </div>

              <div className="border-b-2 mb-6 p-2">
                <h1 className="font-bold text-2xl h-7 mt-3 text-gray-700 ">
                  Pastor Nwabueze Jeremiah Nwite
                </h1>
                <div className="mt-4 text-gray-600 mb-6 md:leading-[20px] text-lg   ">
                  
                  The esteemed leader of Victory Resounding Revival Ministries
                  in Onitsha, Nigeria, is a remarkable spiritual luminary whose
                  multifaceted talents and unwavering dedication illuminate a
                  unique and inspiring tapestry of roles. A consummate
                  Prophectic teacher and preacher, Pastor Nwabueze passionately
                  imparts the profound wisdom of the Scriptures, guiding
                  individuals on their spiritual odysseys with precision and
                  grace. His sermons are not mere words but transformative
                  experiences that resonate deeply with congregants and truth
                  seekers, illuminating the path to righteousness.
                  <p>
                    <h2 className="text-xl font-semibold py-4 mt-2">
                      Beyond the pulpit{" "}
                    </h2>
                    Pastor Nwabueze is a gifted cinematographer and prolific
                    writer. Through the lens of his camera and the stroke of his
                    pen, he skillfully communicates profound spiritual truths.
                    His cinematic creations and literary works are not only
                    artistic masterpieces but powerful conduits of inspiration,
                    knowledge, and spiritual elevation. In addition to his
                    ministerial and creative pursuits, Pastor Nwabueze is a
                    devoted father, embracing the sacred responsibilities of
                    parenthood with boundless love and commitment. As a
                    sought-after speaker, he shares his wisdom and experiences
                    with audiences worldwide, leaving an indelible mark with his
                    compelling messages of faith and resilience.
                  </p>
                  <p>
                    <h2 className="text-xl font-semibold py-4 mt-2">
                      {" "}
                      Furthermore{" "}
                    </h2>
                    Pastor Nwabueze's technical prowess shines as a software
                    engineer and co-leader of the prestigious Google Developer
                    Group Onitsha chapter. His contributions to the realm of
                    technology and innovation are nothing short of remarkable,
                    reflecting his unwavering commitment to excellence in every
                    facet of life. Notably, Pastor Nwabueze is recognized as an
                    ethical hacker and esteemed cyber security consultant,
                    safeguarding digital landscapes and information in our
                    ever-evolving, interconnected world. With a diverse skill
                    set, unwavering faith, and an unquenchable thirst for
                    excellence, Pastor Nwabueze Jeremiah Nwite is a beacon of
                    inspiration, guiding the Victory Resounding Revival
                    Ministries community and the global spiritual landscape
                    toward a brighter, spiritually enriched future."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <h1 className="text-center font-bold text-2xl text-gray-700 md:mt-12 mt-6 ">
              INVITE Pastor Nwabueze Jeremiah Nwite
            </h1>
            <h3 className="text-center w-[400px] mx-auto text-gray-600 text-xl">
              invite Pastor Nwabueze Jeremiah Nwite to minister at your next
              church or ministry event.
            </h3>
          </div>
          <button className="px-6 py-3 block mt-6 md:mb-10 mx-auto text-white bg-blue-600">
            INVITE{" "}
          </button>
        </div>
      </>
    );
}

export default AboutMe;