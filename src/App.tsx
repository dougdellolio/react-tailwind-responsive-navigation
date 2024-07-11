import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-grow">
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className={`flex-grow p-4 overflow-y-auto ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <h1 className="text-2xl">Welcome to my app!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum, felis
            quis sollicitudin varius, lorem turpis tincidunt metus, non gravida justo orci sed
            erat. Phasellus semper risus ut mi lacinia hendrerit. Nullam eu massa in augue
            facilisis aliquet. In nec lacinia arcu. Cras commodo urna sit amet purus
            condimentum, nec sollicitudin justo placerat. Ut eget justo fermentum, laoreet
            felis ut, faucibus orci. Fusce fermentum nisi sed magna hendrerit ultricies.
            Suspendisse in lorem a justo elementum aliquet. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Mauris tempus urna vitae
            lectus finibus consequat. Curabitur non leo ac nisi scelerisque interdum eu at
            leo. Aenean sed eros augue. Nullam pretium orci non est rutrum, quis ultricies
            sapien eleifend. Vestibulum non odio a est sodales gravida id eget augue.
          </p>
          <p>
            Morbi fermentum, ex non congue lacinia, justo mi pulvinar ex, non semper nisi
            magna euismod odio. Vestibulum vel magna eu arcu faucibus pellentesque. Aenean
            euismod eleifend elit, sit amet sollicitudin sem malesuada nec. Cras consequat
            scelerisque justo, in ultrices mi malesuada ut. Curabitur non leo a metus
            vulputate ultricies. Vivamus scelerisque velit libero, ac volutpat justo lacinia
            nec. Nam vestibulum mi et arcu elementum ultricies. Proin ut malesuada libero.
            Praesent eget nisl in dui luctus molestie sed a odio. Mauris vestibulum, nulla
            quis egestas pretium, sapien ex lacinia ligula, eu rhoncus magna nulla vitae
            elit. Cras ut orci feugiat, aliquam nunc eu, fringilla quam.
          </p>
          <p>
            Morbi fermentum, ex non congue lacinia, justo mi pulvinar ex, non semper nisi
            magna euismod odio. Vestibulum vel magna eu arcu faucibus pellentesque. Aenean
            euismod eleifend elit, sit amet sollicitudin sem malesuada nec. Cras consequat
            scelerisque justo, in ultrices mi malesuada ut. Curabitur non leo a metus
            vulputate ultricies. Vivamus scelerisque velit libero, ac volutpat justo lacinia
            nec. Nam vestibulum mi et arcu elementum ultricies. Proin ut malesuada libero.
            Praesent eget nisl in dui luctus molestie sed a odio. Mauris vestibulum, nulla
            quis egestas pretium, sapien ex lacinia ligula, eu rhoncus magna nulla vitae
            elit. Cras ut orci feugiat, aliquam nunc eu, fringilla quam.
          </p>
          <p>
            Morbi fermentum, ex non congue lacinia, justo mi pulvinar ex, non semper nisi
            magna euismod odio. Vestibulum vel magna eu arcu faucibus pellentesque. Aenean
            euismod eleifend elit, sit amet sollicitudin sem malesuada nec. Cras consequat
            scelerisque justo, in ultrices mi malesuada ut. Curabitur non leo a metus
            vulputate ultricies. Vivamus scelerisque velit libero, ac volutpat justo lacinia
            nec. Nam vestibulum mi et arcu elementum ultricies. Proin ut malesuada libero.
            Praesent eget nisl in dui luctus molestie sed a odio. Mauris vestibulum, nulla
            quis egestas pretium, sapien ex lacinia ligula, eu rhoncus magna nulla vitae
            elit. Cras ut orci feugiat, aliquam nunc eu, fringilla quam.
          </p>
          <p>
            Morbi fermentum, ex non congue lacinia, justo mi pulvinar ex, non semper nisi
            magna euismod odio. Vestibulum vel magna eu arcu faucibus pellentesque. Aenean
            euismod eleifend elit, sit amet sollicitudin sem malesuada nec. Cras consequat
            scelerisque justo, in ultrices mi malesuada ut. Curabitur non leo a metus
            vulputate ultricies. Vivamus scelerisque velit libero, ac volutpat justo lacinia
            nec. Nam vestibulum mi et arcu elementum ultricies. Proin ut malesuada libero.
            Praesent eget nisl in dui luctus molestie sed a odio. Mauris vestibulum, nulla
            quis egestas pretium, sapien ex lacinia ligula, eu rhoncus magna nulla vitae
            elit. Cras ut orci feugiat, aliquam nunc eu, fringilla quam.
          </p>
          <p>
            Morbi fermentum, ex non congue lacinia, justo mi pulvinar ex, non semper nisi
            magna euismod odio. Vestibulum vel magna eu arcu faucibus pellentesque. Aenean
            euismod eleifend elit, sit amet sollicitudin sem malesuada nec. Cras consequat
            scelerisque justo, in ultrices mi malesuada ut. Curabitur non leo a metus
            vulputate ultricies. Vivamus scelerisque velit libero, ac volutpat justo lacinia
            nec. Nam vestibulum mi et arcu elementum ultricies. Proin ut malesuada libero.
            Praesent eget nisl in dui luctus molestie sed a odio. Mauris vestibulum, nulla
            quis egestas pretium, sapien ex lacinia ligula, eu rhoncus magna nulla vitae
            elit. Cras ut orci feugiat, aliquam nunc eu, fringilla quam.
          </p>
          <p>
            Morbi fermentum, ex non congue lacinia, justo mi pulvinar ex, non semper nisi
            magna euismod odio. Vestibulum vel magna eu arcu faucibus pellentesque. Aenean
            euismod eleifend elit, sit amet sollicitudin sem malesuada nec. Cras consequat
            scelerisque justo, in ultrices mi malesuada ut. Curabitur non leo a metus
            vulputate ultricies. Vivamus scelerisque velit libero, ac volutpat justo lacinia
            nec. Nam vestibulum mi et arcu elementum ultricies. Proin ut malesuada libero.
            Praesent eget nisl in dui luctus molestie sed a odio. Mauris vestibulum, nulla
            quis egestas pretium, sapien ex lacinia ligula, eu rhoncus magna nulla vitae
            elit. Cras ut orci feugiat, aliquam nunc eu, fringilla quam.
          </p>
          <p>
            Morbi fermentum, ex non congue lacinia, justo mi pulvinar ex, non semper nisi
            magna euismod odio. Vestibulum vel magna eu arcu faucibus pellentesque. Aenean
            euismod eleifend elit, sit amet sollicitudin sem malesuada nec. Cras consequat
            scelerisque justo, in ultrices mi malesuada ut. Curabitur non leo a metus
            vulputate ultricies. Vivamus scelerisque velit libero, ac volutpat justo lacinia
            nec. Nam vestibulum mi et arcu elementum ultricies. Proin ut malesuada libero.
            Praesent eget nisl in dui luctus molestie sed a odio. Mauris vestibulum, nulla
            quis egestas pretium, sapien ex lacinia ligula, eu rhoncus magna nulla vitae
            elit. Cras ut orci feugiat, aliquam nunc eu, fringilla quam.
          </p>
          <p>
            Morbi fermentum, ex non congue lacinia, justo mi pulvinar ex, non semper nisi
            magna euismod odio. Vestibulum vel magna eu arcu faucibus pellentesque. Aenean
            euismod eleifend elit, sit amet sollicitudin sem malesuada nec. Cras consequat
            scelerisque justo, in ultrices mi malesuada ut. Curabitur non leo a metus
            vulputate ultricies. Vivamus scelerisque velit libero, ac volutpat justo lacinia
            nec. Nam vestibulum mi et arcu elementum ultricies. Proin ut malesuada libero.
            Praesent eget nisl in dui luctus molestie sed a odio. Mauris vestibulum, nulla
            quis egestas pretium, sapien ex lacinia ligula, eu rhoncus magna nulla vitae
            elit. Cras ut orci feugiat, aliquam nunc eu, fringilla quam.
          </p>
          <p>
            Aliquam faucibus, ex ut placerat sodales, sapien est fermentum odio, nec volutpat
            ipsum sapien id elit. Pellentesque in pulvinar turpis. Ut ut turpis ut metus
            varius elementum. Aenean condimentum id nisi at pharetra. Nunc vehicula risus
            eget velit auctor, a accumsan dolor pulvinar. Fusce a lorem mi. Suspendisse
            ultricies ligula eget congue placerat. Integer quis arcu diam. Sed bibendum nulla
            sit amet augue scelerisque, vitae feugiat odio feugiat. Cras malesuada libero nec
            tincidunt interdum. Donec condimentum convallis urna, et pellentesque elit
            fermentum eu. Nullam rhoncus libero sit amet erat volutpat, nec eleifend metus
            eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Ut id nunc vitae lacus efficitur congue. Mauris dictum odio ac
            leo consectetur, vel gravida tellus consequat.
          </p>
        </main>
      </div>
    </div>
  );
};

export default App
