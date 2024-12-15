import { useTranslations } from "next-intl";
import { EyeIcon } from "@heroicons/react/24/outline";

function Projects() {
  const t = useTranslations("projects");
  return (
    <>
      <div className="space-y-4">
        <h2 className="heading-2-humane text-fluid-4xl">{t("title")}</h2>
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_200px),_1fr))] gap-4">
          {t.raw("list").map((project: any) => (
            <li key={project.name}>
              <article className="flex h-full flex-col justify-between space-y-4 rounded-custom border border-outline-color p-3">
                <div className="space-y-2">
                  {project.isActive ? (
                    <h3 className="heading-3-humane text-lg font-bold hover:underline">
                      <a href={project.url} className="flex items-center w-fit gap-2" target="_blank">
                        <span>{project.name}</span>
                        <span>
                          <EyeIcon className="w-10 h-10 text-gray-500 hover:text-gray-700" />
                        </span>
                      </a>
                    </h3>
                  ) : (
                    <h3 className="heading-3-humane text-lg font-bold">
                      {project.name}
                    </h3>
                  )}

                  <p className="text-sm font-light">{project.description}</p>
                </div>
                <ul className="tags my-auto flex flex-wrap gap-2 pt-12 text-sm font-extralight *:bg-zinc-600/40">
                  {project.highlights.map(
                    (highlight: string, index: number) => (
                      <li
                        className="cursor-default rounded-sm border border-[hsl(0,0%,20%)] px-5 py-1"
                        key={index}
                      >
                        {highlight}
                      </li>
                    )
                  )}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Projects;
