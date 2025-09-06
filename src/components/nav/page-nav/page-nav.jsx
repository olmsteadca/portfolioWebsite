import './page-nav.css';

function PageNav({ sections }) {
    var cntr = 1;
    return (
        <div className="page-nav">
            <div className="page-nav-content">
                <div className="page-nav-links">
                    <ul>
                        {sections.map((section) => (
                            <h2 className="section-title" key={cntr++}>{section}</h2>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageNav;