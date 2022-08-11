import React from "react";
import data from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-200 text-custom flex justify-center"
    >
      <div className="w-large lg:w-medium 2xl:w-custom pb-24">
        <h2 className="text-4xl font-bold">Projects</h2>
        <article className="flex flex-wrap pt-12 justify-center md:justify-start">
          {data.map((d) => {
            return (
              <div
                key={d.id}
                className="flex-100 sm:flex-50 md:flex-30 xl:flex-25 shadow-xl my-3 rounded-md m-2"
              >
                <div
                  style={{ backgroundImage: `url(${d.img})` }}
                  className="container h-56 bg-cover rounded-t-md bg-center relative z-10"
                >
                  <div className="overlay absolute top-0 left-0 right-0 bottom-0 w-full justify-center items-center rounded-t-md">
                    <div>
                      <a
                        href={d.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl mx-2"
                      >
                        <i className="fab fa-github-square text-white hover:text-yellow-500"></i>
                      </a>
                      {d.liveLink && (
                        <a
                          href={d.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-5xl mx-2"
                        >
                          <i className="fas fa-eye brightness-200 text-white hover:text-yellow-500"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-center text-2xl font-bold mb-2">
                    {d.title}
                  </h4>
                  <p className="font-bold text-md">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}
