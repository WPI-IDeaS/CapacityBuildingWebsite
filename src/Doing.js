import React, {useState, useEffect} from 'react';
import {sn, sn_topic} from "./SiteNode";

function Doing() {
    return (
        [
            "Doing Capacity Building",
            <div>
                Doing
            </div>
        ]
    );
}

function GettingToKnow() {
    return (
        [
            "Getting to Know Your System",
            <div>
                Building capacity might involve large shifts in your system or small adjustments to better support people using it or anything in between. How do you learn about your system? How do you help others to understand your system? How do you figure out what other, similar systems look like and do? There are lots of ways to get to know your system. This section describes a few that might be particularly valuable and can be intimidating for novices.
            </div>
        ]
    );
}

function LiteratureReviews() {
    return (
        [
            "Getting to Know Your System: Literature Reviews",
            <div>
                Why do a literature review? We often think of capacity building as developing a deeper level of understanding in a particular area. Literature reviews help you to develop breadth in understanding the landscape of knowledge about a type of system (e.g., the community college sector of higher education, public health’s response to COVID). Instead of a deep dive in one particular way of viewing a topic, literature reviews show you all the ways that different people are thinking about the topic, how they are thinking about it using a variety of methods, and the various conclusions they have reached.
                <br/>
                Reading what has been published by researchers can help you:
                <ul>
                    <li>Save time learning how to do something new as you read about others’ successes and failures</li>
                </ul>
            </div>,
            <div>
                <ul>
                    <li>Gain helpful tools and tips when you are struggling to move forward</li>
                    <li>Strategize about which aspects of context are helpful and harmful factors</li>
                    <li>Determine where the limits are to what is known so you can learn something new that others might want to know, too</li>
                    <li>To publish a peer-reviewed article in an area of (growing) expertise where there are no systematic literature reviews available or where existing reviews are outdated, centered around a perspective you find lacking, or exclusive to knowledge shared across a broader set of publishing venues</li>
                </ul>
            </div>
        ]
    );
}

function LitInformal() {
    return (
        [
            "Literature Reviews: Informal Review Process",
            <div>
                There is great value in letting the literature lead you where it may. Sometimes you don’t know what you are even looking for unless you allow yourself to wander around what has been published.
            </div>
        ]
    );
}

function TipsFindingArticles() {
    return (
        [
            "Literature Reviews: Informal Review Process",
            <div>
                <ul>
                    <li>If you are seeking recommendations, you can crowdsource using Twitter by describing what you’re
                        looking for and asking #AcademicTwitter for reading suggestions. By tagging #AcademicTwitter, a
                        wide range of people might see and respond to your request.</li>

                    <li>If you find a good article, regardless of how you come across it, you can use that to find other
                        potentially interesting reads. One strategy is to click the Google Scholar button “Related
                        articles” under an article’s entry in a search list to get a list of related articles.</li>

                    <li>Another strategy is to click the “Cited by” button, which will call up all of the articles that
                        have cited the one you enjoy. You can then narrow that list, if needed, by clicking a check box
                        to “Search within citing articles” and entering a new search. For example, if you are only
                        interested in articles describing a certain school level, you might search within citing
                        articles for “undergraduate” to weed out studies at the primary and secondary school levels.</li>
                </ul>
            </div>
        ]
    );
}

function TipsGoodArticles() {
    return (
        [
            "Literature Reviews: What Does a \"Good Article\" Mean?",
            <div>
                So many things! When you are engaging in an informal review of the literature, you have the ability to define what is useful as you go. This is a major difference between an informal process and formal systematic review processes (described in more detail below). “Good” might include any article that:
                <ul>
                    <li>describes findings that changed how you viewed a problem</li>

                    <li>showed you a new perspective for understanding how people different from you experience life</li>

                    <li>suggested a way to make something relevant to an audience you want to reach</li>

                </ul>
            </div>,
            <div>
                <ul>
                    <li>displayed information in ways that were particularly easy to follow, either in tables or diagrams
                        or subsections or writing style</li>

                    <li>reference a body of literature in ways that summarize, critique, connect, apply to a problem in
                        ways that are relevant to you</li>

                </ul>
            </div>
        ]
    );
}

function TipsFormalReview() {
    return (
        [
            "Literature Reviews: Formal Review Process",
            <div>
                Depending on what you are aiming to accomplish, you may decide that you need a more systematic coverage of the literature in your review. If you plan to publish a literature review article (not a section of an article manuscript that situates a research study, but an article manuscript that is only a review of the literature), you will need to follow established formal protocols for the methods to be considered high enough quality to merit peer-reviewed publication. In these instances, the literature review is a type of scientific inquiry, and therefore needs to be conducted in ways that are deemed valid, reliable, and repeatable by others. This requires us to intentionally plan strategies for conducting the review and to articulate those decisions transparently when we share the results.
                <br/><br/>
                <i>Research Questions.</i> Just like in any study, systematic literature reviews are guided by research questions. These should articulate what you want to know about the state of the field. For example, are you interested in identifying the predominant concepts and theoretical
            </div>,
            <div>
                perspectives at work? Describing which methodologies are used and which are not? Assessing whose voices are not yet included as participants shaping research conclusions, as theorists shaping understanding of phenomena, as authors influencing a given field?
                <br/><br/>
                <i>Inclusion & Exclusion Criteria.</i> In designing the research methods of a systematic literature review, you’ll set up inclusion and exclusion criteria. These decisions are made before beginning to search for literature because you will use them to decide which literature to include in your dataset and which to ignore and why. Inclusion criteria typically define the conceptual boundaries of a study. This might be related to which disciplines are of interest - for example, perhaps you are only interested in studies that are in education and not those in public health, social work, or other fields. This might also be defined by the scope of what you are interested in. Inclusion criteria should also specify which span of publication dates are included; these are typically either in decade-long increments or begin at the end date of a previous, influential
            </div>,
            <div>
                review of the same (or closely related) topic.
                <br/><br/>
                Exclusion criteria are often used for quality control. For example, you might only include studies that name a methodology or meet other methodological rigor criteria to weed out studies without sufficient attention to the scientific or scholarly knowledge development process. You might decide to exclude forms of dissemination that are not peer reviewed, for example. You might also consider exclusion criteria that delimit whose knowledge you are interested in understanding. This might be pragmatic, such as excluding articles written in a language you cannot read, or centered in the cultural basis for experience, such as excluding articles about systems in other countries that are functioning in cultural systems that might not flourish in your own setting.
                <br/><br/>
                <i>Finding Literature.</i> In a systematic literature review, the goal is to identify every article or

            </div>,
            <div>
                other type of study report (according to your inclusion and exclusion criteria). These literature then become part of your dataset. To find the literature, you will need to specify 1) where you will look for the literature (e.g., Google Scholar, EBSCOhost, other popular academic search engines), 2) which search terms will be used and in which combinations, and 3) who will conduct the search.
                <br/><br/>
                Organizing the Data. Some tips for organizing your search while you compile your dataset:
                <ul><li>As you search, it can be useful to have a spreadsheet where you track the initial number of
                    returns
                    on a given set of search terms and the number retained in the study.</li>

                    <li>If you are using more than one search engine (e.g., JSTOR and Google Scholar), you might also
                        want
                        to track which search engine you’ve used with a given set of search terms to remind yourself
                        systematically what is left to do.</li></ul>


            </div>,
            <div>
                <ul><li>Citation management tools can help you track your literature and, depending on which tool you
                    use,
                    they can even help you organize your notes and keywords for each article. EndNote, Mendeley, and
                    Zotero are popular options. If you are affiliated with a college or university, check the library to
                    see if there is a particular citation management tool to which you have free access.</li></ul>
                
            </div>
        ]
    );
}

function LitReviewsResources() {
    return (
        [
            "Literature Reviews: Informal Review Process",
            <div>
                Procedures for conducting a formal systematic literature review are laid out in greater detail at:<br/>
                Gough, D. (2007). Weight of evidence: a framework for the appraisal of the quality and relevance of evidence. Research papers in education, 22(2), 213-228.
                <br/><br/>
                Xiao, Y., & Watson, M. (2019). Guidance on conducting a systematic literature review. Journal of planning education and research, 39(1), 93-112.

            </div>
        ]
    );
}

Doing.makeDirectory = function() {
    return sn_topic("Doing", Doing, "red", "Doing Capacity Building", [
        sn("Getting to Know Your System", GettingToKnow, [
            sn("Literature Reviews", LiteratureReviews, [
                sn("Informal Review Process", LitInformal),
                sn("Tips: Finding Articles", TipsFindingArticles),
                sn("Tips: What's a \"Good\" Article?", TipsGoodArticles),
                sn("Tips: Formal Review Processes", TipsFormalReview),
                sn("Resources", LitReviewsResources)
            ]),
            sn("Surveys", "-link-", [
                sn("What Mattered for Us", "-link-"),
                sn("Survey Development", "-link-")
            ]),
            sn("SWOT Analysis", "-link-", [
                sn("What Mattered to Us", "-link-"),
                sn("Tools: SWOT Prompts", "-link-"),
                sn("Common Design Failures", "-link-"),
                sn("Tips: Alternatives to SWOT", "-link-"),
                sn("Resources", "-link-")
            ]),
            sn("Questions to Consider", "-link-")
        ]),
        sn("Developing Individuals' Expertise", "-link-", [
            sn("MOOCs and Directed Readings", "-link-", [
                sn("Finding MOOCs", "-link-"),
                sn("Tips: Finding Useful Readings", "-link-"),
                sn("What Mattered for Us", "-link-"),
                sn("Resources", "-link-"),
                sn("Common Design Failures", "-link-")
            ]),
            sn("Apprenticeship Collaborations", "-link-", [
                sn("Tradeoffs and Tensions", "-link-")
            ]),
            sn("Reflective Journaling", "-link-", [
                sn("Tradeoffs and Tensions", "-link-"),
                sn("What Mattered for Us", "-link-"),
                sn("Tools: Sample Prompts", "-link-")
            ]),
            sn("Questions to Consider", "-link-")
        ]),
        sn("Building Shared Knowledge", "-link-", [
            sn("Communities of Practice", "-link-", [
                sn("What Mattered to Us", "-link-"),
                sn("Resources", "-link-"),
                sn("Tradeoffs and Tensions", "-link-"),
                sn("Common Design Failures", "-link-")
            ]),
            sn("Annual Retreats", "-link-", [
                sn("Tip: Shared Ownership", "-link-"),
                sn("What Mattered to Us", "-link-"),
                sn("Tools: Effective Meetings", "-link-"),
                sn("Common Design Failures", "-link-")
            ]),
            sn("Questions to Consider", "-link-")
        ])
    ]);
}

export default Doing;