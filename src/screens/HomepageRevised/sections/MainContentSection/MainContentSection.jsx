import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const MainContentSection = () => {
  const logoData = [
    { src: "https://c.animaapp.com/wBLQVuTq/img/logo-1.svg", alt: "Logo" },
    { src: "https://c.animaapp.com/wBLQVuTq/img/logo-1.svg", alt: "Logo" },
    { src: "https://c.animaapp.com/wBLQVuTq/img/logo-2.svg", alt: "Logo" },
    { src: "https://c.animaapp.com/wBLQVuTq/img/logo-3.svg", alt: "Logo" },
    { src: "https://c.animaapp.com/wBLQVuTq/img/logo-4.svg", alt: "Logo" },
    { src: "https://c.animaapp.com/wBLQVuTq/img/logo-5.svg", alt: "Logo" },
  ];

  const articleData = [
    {
      image: "https://c.animaapp.com/wBLQVuTq/img/image-1@2x.png",
      title: "Safa Oasis",
      location: "Riyadh - Saudi Arabia",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen...",
      imagePosition: "left",
    },
    {
      image: "https://c.animaapp.com/wBLQVuTq/img/image-1@2x.png",
      title: "Safa Oasis",
      location: "Riyadh - Saudi Arabia",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen...",
      imagePosition: "right",
    },
  ];

  const spotlightData = [
    {
      image: "https://c.animaapp.com/wBLQVuTq/img/image-2@2x.png",
      title: "Safa Oasis",
      location: "Riyadh - Saudi Arabia",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand..",
    },
    {
      image: "https://c.animaapp.com/wBLQVuTq/img/image-3@2x.png",
      title: "Safa Oasis",
      location: "Riyadh - Saudi Arabia",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand..",
    },
    {
      image: "https://c.animaapp.com/wBLQVuTq/img/image-4@2x.png",
      title: "Safa Oasis",
      location: "Riyadh - Saudi Arabia",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand..",
    },
    {
      image: "https://c.animaapp.com/wBLQVuTq/img/image-5@2x.png",
      title: "Safa Oasis",
      location: "Riyadh - Saudi Arabia",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand..",
    },
  ];

  const categoryData = [
    {
      title: "Projects",
      description:
        "Showcases landmark AEC developments in the Middle East.\nA dynamic portfolio of region‑defining builds, case studies, and featured sites.",
      icon: "https://c.animaapp.com/wBLQVuTq/img/vector.svg",
    },
    {
      title: "Companies",
      description:
        "Connects industry-leading firms and suppliers.\n Curates top-tier businesses shaping construction and design across the region.",
      icon: "https://c.animaapp.com/wBLQVuTq/img/vector-3.svg",
    },
    {
      title: "People",
      description:
        "Bridges talent with opportunity in architecture and construction.\n A hub for professionals, freelancers, and specialists to network and build their careers.",
      icon: "https://c.animaapp.com/wBLQVuTq/img/vector-3.svg",
    },
    {
      title: "Products",
      description:
        "Highlights tools and technologies used in the AEC sector.\n Features innovative materials, BIM solutions, and equipment trusted by industry professionals.",
      icon: "https://c.animaapp.com/wBLQVuTq/img/vector-3.svg",
    },
  ];

  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] overflow-y-scroll">
      <div className="relative w-full h-[62px] bg-white-bg border border-solid border-line shadow-[0px_3px_4px_#f4f4f480] overflow-x-scroll" />

      <section className="flex w-full items-start justify-center gap-[60px] p-[60px] relative flex-[0_0_auto] bg-white-bg">
        <div className="flex flex-col w-[664px] items-start gap-2.5 relative">
          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="https://c.animaapp.com/wBLQVuTq/img/frame-194.svg"
            />

            <div className="inline-flex flex-col items-start gap-[5px] pt-2.5 pb-0 px-0 relative flex-[0_0_auto]">
              <h1 className="mt-[-1.00px] text-[length:var(--main-headers-font-size)] leading-[var(--main-headers-line-height)] [-webkit-line-clamp:2] relative self-stretch font-main-headers font-[number:var(--main-headers-font-weight)] text-[color:var(--body-text)] tracking-[var(--main-headers-letter-spacing)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical] [font-style:var(--main-headers-font-style)]">
                The Hub that connects
                <br />
                the Construction Ecosystem
              </h1>

              <p className="text-[length:var(--sub-headers-font-size)] leading-[var(--sub-headers-line-height)] [-webkit-line-clamp:1] relative self-stretch font-sub-headers font-[number:var(--sub-headers-font-weight)] text-[color:var(--body-text)] tracking-[var(--sub-headers-letter-spacing)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical] [font-style:var(--sub-headers-font-style)]">
                Online &amp; On-Ground
              </p>
            </div>
          </div>

          <p className="relative self-stretch font-body-text font-[number:var(--body-text-font-weight)] text-[color:var(--body-text)] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
            Integrating PROJECTS, PRODUCTS, COMPANIES and PEOPLE
          </p>
        </div>

        <Card className="flex flex-col items-start justify-center gap-10 px-5 py-0 relative flex-1 self-stretch grow bg-grey-30 rounded">
          <CardContent className="justify-center gap-5 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative p-0">
            <p className="mt-[-1.00px] text-[length:var(--SUB-bold-font-size)] leading-[var(--SUB-bold-line-height)] [-webkit-line-clamp:2] relative self-stretch font-SUB-bold font-[number:var(--SUB-bold-font-weight)] text-[color:var(--body-text)] tracking-[var(--SUB-bold-letter-spacing)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical] [font-style:var(--SUB-bold-font-style)]">
              Access major construction Projects in the Middle East, and connect
              with the People who matter
            </p>

            <Button className="inline-flex items-center justify-center gap-1.5 p-2.5 relative flex-[0_0_auto] bg-company rounded overflow-hidden h-auto">
              <span className="mt-[-1.00px] font-[number:var(--button-text-font-weight)] text-white-bg text-[length:var(--button-text-font-size)] relative w-fit font-button-text tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] whitespace-nowrap [font-style:var(--button-text-font-style)]">
                Get Started
              </span>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col h-[700px] items-center relative self-stretch w-full">
        <Tabs
          defaultValue="projects"
          className="flex w-full h-10 items-end gap-2.5 px-10 py-0 relative bg-white-bg border-b [border-bottom-style:solid] border-[color:var(--body-text)]"
        >
          <TabsList className="bg-transparent h-auto p-0 gap-2.5">
            <TabsTrigger
              value="projects"
              className="p-0 bg-transparent data-[state=active]:bg-transparent"
            >
              <img
                className="relative w-[121px]"
                alt="Frame"
                src="https://c.animaapp.com/wBLQVuTq/img/frame-195.svg"
              />
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="p-0 bg-transparent data-[state=active]:bg-transparent"
            >
              <img
                className="relative w-[100px] h-[30px]"
                alt="Events"
                src="https://c.animaapp.com/wBLQVuTq/img/events.svg"
              />
            </TabsTrigger>
            <TabsTrigger
              value="announcement"
              className="p-0 bg-transparent data-[state=active]:bg-transparent"
            >
              <img
                className="relative w-[100px] h-[30px]"
                alt="Announcement"
                src="https://c.animaapp.com/wBLQVuTq/img/announcement.svg"
              />
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <img
          className="relative h-[660px]"
          alt="Frame"
          src="https://c.animaapp.com/wBLQVuTq/img/frame-192.svg"
        />
      </section>

      <section className="flex flex-col w-full items-center gap-[30px] px-[60px] py-10 relative flex-[0_0_auto] bg-white-bg border border-solid border-line">
        <div className="flex flex-col w-full items-center relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] font-main-headers font-[number:var(--main-headers-font-weight)] text-grey-secondary text-[length:var(--main-headers-font-size)] text-center tracking-[var(--main-headers-letter-spacing)] leading-[var(--main-headers-line-height)] whitespace-nowrap [font-style:var(--main-headers-font-style)]">
            Explore the right resources across the entire project lifecycle.
          </h2>
        </div>

        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="flex flex-col w-[770px] items-center justify-center relative flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-[448px] h-[60px] items-center gap-1 p-3 relative bg-white-bg rounded border border-solid border-[color:var(--body-text)] shadow-light-medium">
                <Input
                  placeholder="SearchIcon the Construction Ecosystem"
                  className="relative flex-1 font-body-regular font-[number:var(--body-regular-font-weight)] text-grey-secondary text-[length:var(--body-regular-font-size)] text-center tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)] border-0 shadow-none"
                />
                <SearchIcon className="relative w-[18px] h-[18px]" />
              </div>
            </div>
          </div>

          <div className="relative w-[770px] h-[836.06px]">
            <div className="absolute top-[calc(50.00%_-_352px)] left-[calc(50.00%_-_385px)] w-[770px] h-[770px]">
              <img
                className="absolute w-[98.89%] h-[98.89%] top-0 left-0"
                alt="Group"
                src="https://c.animaapp.com/wBLQVuTq/img/group.png"
              />

              <img
                className="absolute w-[12.23%] h-[12.25%] top-[43.85%] left-[43.99%]"
                alt="Group"
                src="https://c.animaapp.com/wBLQVuTq/img/group-1@2x.png"
              />
            </div>

            <div className="flex flex-col w-[770px] h-[770px] items-center justify-between absolute top-[calc(50.00%_-_352px)] left-[calc(50.00%_-_385px)]">
              <div className="flex h-[351px] items-center justify-between relative self-stretch w-full">
                {categoryData.slice(0, 2).map((category, index) => (
                  <Card
                    key={index}
                    className="flex flex-col w-[352px] h-[352px] items-start gap-[5px] px-5 py-2.5 relative rounded bg-transparent border-0"
                  >
                    <CardContent className="p-0 w-full">
                      <div className="flex h-[100px] items-center justify-between px-0 py-2.5 relative self-stretch w-full rounded overflow-hidden">
                        <h3 className="relative flex-1 self-stretch mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-white-bg text-[length:var(--sub-headers-font-size)] tracking-[var(--sub-headers-letter-spacing)] leading-[var(--sub-headers-line-height)] [font-style:var(--sub-headers-font-style)]">
                          {category.title}
                        </h3>

                        <img
                          className="relative w-3 h-5 aspect-[0.62]"
                          alt="Vector"
                          src={category.icon}
                        />
                      </div>

                      <p className="relative flex-1 self-stretch font-SUB-bold font-[number:var(--SUB-bold-font-weight)] text-white-bg text-[length:var(--SUB-bold-font-size)] tracking-[var(--SUB-bold-letter-spacing)] leading-[var(--SUB-bold-line-height)] [font-style:var(--SUB-bold-font-style)] whitespace-pre-line">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex h-[351px] items-start justify-between relative self-stretch w-full">
                {categoryData.slice(2, 4).map((category, index) => (
                  <Card
                    key={index + 2}
                    className="flex flex-col w-[352px] h-[352px] items-start gap-[5px] px-5 py-2.5 relative rounded bg-transparent border-0"
                  >
                    <CardContent className="p-0 w-full">
                      <div className="flex h-[100px] items-center justify-between px-0 py-2.5 relative self-stretch w-full rounded overflow-hidden">
                        <h3 className="relative flex-1 self-stretch mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-white-bg text-[length:var(--sub-headers-font-size)] tracking-[var(--sub-headers-letter-spacing)] leading-[var(--sub-headers-line-height)] [font-style:var(--sub-headers-font-style)]">
                          {category.title}
                        </h3>

                        <img
                          className="relative w-3 h-5 aspect-[0.62]"
                          alt="Vector"
                          src={category.icon}
                        />
                      </div>

                      <p className="relative flex-1 self-stretch font-SUB-bold font-[number:var(--SUB-bold-font-weight)] text-white-bg text-[length:var(--SUB-bold-font-size)] tracking-[var(--SUB-bold-letter-spacing)] leading-[var(--SUB-bold-line-height)] [font-style:var(--SUB-bold-font-style)] whitespace-pre-line">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <img
              className="absolute top-0 left-[385px] w-px h-[450px]"
              alt="Line"
              src="https://c.animaapp.com/wBLQVuTq/img/line-7.svg"
            />
          </div>
        </div>
      </section>

      <section className="flex h-[150px] items-center justify-between px-[60px] py-2.5 relative self-stretch w-full bg-white-bg border border-solid border-line">
        {logoData.map((logo, index) => (
          <img
            key={index}
            className="relative self-stretch w-[200px]"
            alt={logo.alt}
            src={logo.src}
          />
        ))}
      </section>

      <section className="flex flex-col items-start gap-10 px-[60px] py-10 relative self-stretch w-full flex-[0_0_auto] bg-white-bg">
        <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-colors-theme-heading-color text-[length:var(--sub-headers-font-size)] tracking-[var(--sub-headers-letter-spacing)] leading-[var(--sub-headers-line-height)] whitespace-nowrap [font-style:var(--sub-headers-font-style)]">
            Articles
          </h2>

          <img
            className="relative w-[30px] h-[19px] aspect-[1.62]"
            alt="Vector"
            src="https://c.animaapp.com/wBLQVuTq/img/vector-4.svg"
          />
        </header>

        {articleData.map((article, index) => (
          <Card
            key={index}
            className="flex items-start relative self-stretch w-full flex-[0_0_auto] bg-colors-theme-body-bg rounded border border-solid border-line"
          >
            <CardContent className="flex items-start p-0 w-full">
              {article.imagePosition === "left" && (
                <div className="flex flex-col w-[300px] h-[200px] items-start gap-2.5 pt-px pb-0 px-px relative">
                  <img
                    className="flex-1 grow object-cover relative self-stretch w-full"
                    alt="Image"
                    src={article.image}
                  />
                </div>
              )}

              <div className="flex flex-col items-start gap-3 pr-[var(--sizes-spacing-spacer-3)] pl-[var(--sizes-spacing-spacer-3)] py-[5px] relative flex-1 self-stretch grow">
                <div className="flex flex-col items-start gap-3 relative flex-1 self-stretch w-full grow">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <h3 className="relative w-fit mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-colors-theme-heading-color text-[length:var(--sub-headers-font-size)] tracking-[var(--sub-headers-letter-spacing)] leading-[var(--sub-headers-line-height)] whitespace-nowrap [font-style:var(--sub-headers-font-style)]">
                      {article.title}
                    </h3>

                    <p
                      className={`relative w-fit font-body-text font-[number:var(--body-text-font-weight)] text-colors-theme-body-color text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)] ${article.imagePosition === "left" ? "text-right" : ""}`}
                    >
                      {article.location}
                    </p>
                  </div>

                  <div className="flex items-start relative flex-1 self-stretch w-full grow">
                    <div className="flex flex-col h-[66px] items-center gap-1 relative flex-1 grow">
                      <div className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto] mb-[-30.00px]">
                        <p className="relative self-stretch mt-[-1.00px] font-light-big font-[number:var(--light-big-font-weight)] text-colors-theme-body-color text-[length:var(--light-big-font-size)] tracking-[var(--light-big-letter-spacing)] leading-[var(--light-big-line-height)] [font-style:var(--light-big-font-style)]">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="relative self-stretch font-body-text font-[number:var(--body-text-font-weight)] text-company text-[length:var(--body-text-font-size)] text-right tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                  See more...
                </p>
              </div>

              {article.imagePosition === "right" && (
                <div className="flex flex-col w-[300px] h-[200px] items-start gap-2.5 pt-px pb-0 px-px relative">
                  <img
                    className="flex-1 grow object-cover relative self-stretch w-full"
                    alt="Image"
                    src={article.image}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="flex flex-col w-full items-center gap-5 px-[60px] py-10 relative flex-[0_0_auto] bg-white-bg border border-solid border-line">
        <header className="flex w-full items-start justify-between relative flex-[0_0_auto] bg-transparent">
          <h2 className="relative flex-1 mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-colors-theme-heading-color text-[length:var(--sub-headers-font-size)] tracking-[var(--sub-headers-letter-spacing)] leading-[var(--sub-headers-line-height)] [font-style:var(--sub-headers-font-style)]">
            Spotlight
          </h2>

          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              size="icon"
              className="inline-flex items-center justify-center p-3 relative flex-[0_0_auto] rounded-[var(--sizes-spacing-spacer-4)] overflow-hidden border border-solid border-colors-component-general-border-color h-auto"
            >
              <ChevronLeftIcon className="relative w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="inline-flex items-center justify-center p-3 relative flex-[0_0_auto] rounded-[var(--sizes-spacing-spacer-4)] overflow-hidden border border-solid border-colors-component-general-border-color h-auto"
            >
              <ChevronRightIcon className="relative w-4 h-4" />
            </Button>
          </div>
        </header>

        <div className="flex w-full items-start justify-between relative flex-[0_0_auto]">
          {spotlightData.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col w-[300px] items-start relative bg-colors-theme-body-bg rounded border border-solid border-line"
            >
              <CardContent className="p-0 w-full">
                <div className="flex flex-col items-start gap-2.5 pt-px pb-0 px-px flex-[0_0_auto] relative self-stretch w-full">
                  <img
                    className="h-[230px] object-cover relative self-stretch w-full"
                    alt="Image"
                    src={item.image}
                  />
                </div>

                <div className="flex flex-col items-start gap-3 pt-[var(--sizes-spacing-spacer-3)] pr-[var(--sizes-spacing-spacer-3)] pb-[var(--sizes-spacing-spacer-3)] pl-[var(--sizes-spacing-spacer-3)] relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch h-[23px] mt-[-1.00px] font-button-text font-[number:var(--button-text-font-weight)] text-colors-theme-heading-color text-[length:var(--button-text-font-size)] text-center tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] whitespace-nowrap [font-style:var(--button-text-font-style)]">
                    {item.title}
                  </h3>

                  <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-center gap-1 relative flex-1 grow">
                      <div className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative self-stretch mt-[-1.00px] font-short font-[number:var(--short-font-weight)] text-colors-theme-body-color text-[length:var(--short-font-size)] text-center tracking-[var(--short-letter-spacing)] leading-[var(--short-line-height)] [font-style:var(--short-font-style)]">
                          {item.location}
                        </p>

                        <p className="relative self-stretch font-body-text font-[number:var(--body-text-font-weight)] text-colors-theme-body-color text-[length:var(--body-text-font-size)] text-center tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="inline-flex items-start gap-3 pt-5 pb-0 px-0 relative flex-[0_0_auto]">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`relative w-2 h-2 rounded ${dot.active ? "bg-colors-theme-primary" : "bg-colors-component-general-border-color"}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
