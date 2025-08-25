import './page-nav.css';

function PageNav({ sections }) {
    return (
        <div className="page-nav">
            <div className="page-nav-content">
                <div className="page-nav-links">
                    <ul>
                        {sections.map((section) => (
                            <h2 className="section-title">{section}</h2>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageNav;