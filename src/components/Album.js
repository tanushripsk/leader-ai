import React, { useRef, useEffect, useState } from 'react';

const styles = {
  body: {
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2rem',
    position: 'sticky',
    top: 0,
    backgroundColor: 'black',
    zIndex: 1000,
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns in the grid
    gap: '1rem',
    padding: '1rem',
  },
  gridItem: {
    gridColumn: 'span 2', // Default span full width
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px', // Optional rounded corners
    height: '70vh', // Adjust height for visual consistency
  },
  twoColumnItem: {
    gridColumn: 'span 1', // Span one column for items in the two-image row
  },
  image: {
    width: '60%',
    height: '60%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease', // Smooth zoom effect
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.5rem',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  },
  overlayVisible: {
    opacity: 1,
  },
  info: {
    position: 'absolute',
    bottom: '1rem',
    left: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
  },
  tags: {
    fontSize: '0.75rem',
  },
  albumTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
};

function Album() {
  const albums = [
    { img: '/a1.jpg', tags: 'TRAVEL COLLABORATION', title: 'Colorful India' },
    { img: '/a2.jpg', tags: 'CONCEPTUAL COMMERCIAL', title: 'Echoes of Dreams' },
    { img: '/a3.jpg', tags: '', title: 'Wings of Freedom' },
    { img: '/a4.jpg', tags: '', title: 'Crafted Perfection' },
    { img: '/a5.jpg', tags: '', title: 'Wild Wonder' },
  ];

  return (
    <div style={styles.body}>
      <div style={styles.title} className='font-bold text-orange-500'>Albums</div>
      <div style={styles.gridContainer}>
        {albums.map((album, index) => (
          <div
            key={index}
            style={{
              ...styles.gridItem,
              ...(index === 2 || index === 3 ? styles.twoColumnItem : {}),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('img').style.transform =
                'scale(1.2)';
              e.currentTarget.querySelector('.hoverOverlay').style.opacity = 1;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('img').style.transform =
                'scale(1)';
              e.currentTarget.querySelector('.hoverOverlay').style.opacity = 0;
            }}
          >
            <img src={album.img} alt={album.title} style={styles.image} />
            <div style={styles.info}>
              <div style={styles.tags}>{album.tags}</div>
              <div style={styles.albumTitle}>{album.title}</div>
            </div>
            <div
              style={{ ...styles.hoverOverlay }}
              className="hoverOverlay"
            >
              {/* View Structure */}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
