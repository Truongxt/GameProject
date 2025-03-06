import './layout.css'

// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {    
    return(
        <main className="wrapLayout">
            <div className="container">
                {children}
            </div>
        </main>
    );
}   

export default MainLayout;