import ReactMarkdown from 'react-markdown';

function goodbyeMSWord() {

    const markdown = `
        # **Goodbye MS Word :(**

        ##### Hello Kind Reader,

    Today I opened up Microsoft Word to take notes on the autonomic nervous system, when I saw a tiny yellow banner at the top announcing terrible news:   

    **MS WORD IS NO LONGER!!**

    So I, of course, I got to scheming. Definitely one of my favorite things to do is imagine projects that would take a lot of time and effort. As 4th grade me once wrote in scribbled cursive, I am a dreamer.
    
    To the crux of the scheme!

    ##### **WHY:**

    Microsoft is ending support for word. :(

    It's $99 for HOME USE(!!). Plus, Microsoft steals your data and sends it to freaking B\*\*\*kR\*\*k so they can buy everything you own and sell it back to you.

    *Just jokes of course (ᵕ—ᴗ—)*


    Word is BY FAR my favorite text editor - it's incredibly capable! It's that capability that makes it worth using despite it's drawback of having an overwhelming amount of buttons and options and menu spaghetti. Now, some may say "oh just use Google Docs" - WRONG! that sucks too, just another megacorporation trying to turn America into one big company town.

    *Who said that???\\*


    Also, AI. All I'll say about that.

    No- also, Minecraft. Did you know Mojang is (allegedly) getting sued in a class action lawsuit?

    ##### HOW:

    I need to really study word if i want to do this. I think I could start taking screenshots or something, taking notes for each one and make a sort of storyboard. Maybe even do some nitty gritty use case flows.

    ##### WHEN:

    Microsoft is ending support on October 14th, 2025.

    I will try to finish a minimally interactive version of my portfolio website, possibly within the first week of October, so I can get lots of good references before it is gone forever.

    Next time you hear from me, I will hopefully have some sort of file to link containing my research.

    Until then,
    ✿ Celeste ✿
`;

    return (
        <div style={{ textAlign: "right" }}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

export default goodbyeMSWord;