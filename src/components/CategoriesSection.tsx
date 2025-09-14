import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import CategoryCard from './CategoryCard';

// Top 5 high demand work
import idCardsImg from '@/assets/id-cards.jpg';
import balloonPrintingImg from '@/assets/balloon-printing.jpg';
import signBoardsImg from '@/assets/sign-boards.jpg';
import bannersImg from '@/assets/banners.jpg';
import umbrellaPrintingImg from '@/assets/umbrella-printing.jpg';

// Next 8 categories
import tshirtPrintingImg from '@/assets/tshirt-printing.jpg';
import mugPrintingImg from '@/assets/mug-printing.jpg';
import flyerPrintingImg from '@/assets/flyer-printing.jpg';
import notebookPrintingImg from '@/assets/notebook-printing.jpg';
import penPrintingImg from '@/assets/pen-printing.jpg';
import calendarPrintingImg from '@/assets/calendar-printing.jpg';
import posterPrintingImg from '@/assets/poster-printing.jpg';
import stickerPrintingImg from '@/assets/sticker-printing.jpg';

// Third row 8 more (optional, repeat or add new)
import envelopePrintingImg from '@/assets/envelope-printing.jpg';
import cardPrintingImg from '@/assets/card-printing.jpg';
import bagPrintingImg from '@/assets/bag-printing.jpg';
import folderPrintingImg from '@/assets/folder-printing.jpg';
import badgePrintingImg from '@/assets/badge-printing.jpg';
import capPrintingImg from '@/assets/cap-printing.jpg';
import labelPrintingImg from '@/assets/label-printing.jpg';
import notebook2PrintingImg from '@/assets/notebook2-printing.jpg';

const highDemand = [
  { title: 'ID Cards', image: idCardsImg },
  { title: 'Balloon Printing', image: balloonPrintingImg },
  { title: 'Sign Boards', image: signBoardsImg },
  { title: 'Banners', image: bannersImg },
  { title: 'Umbrella Printing', image: umbrellaPrintingImg },
];

const row2 = [
  { title: 'T-Shirt Printing', image: tshirtPrintingImg },
  { title: 'Mug Printing', image: mugPrintingImg },
  { title: 'Flyer Printing', image: flyerPrintingImg },
  { title: 'Notebook Printing', image: notebookPrintingImg },
  { title: 'Pen Printing', image: penPrintingImg },
  { title: 'Calendar Printing', image: calendarPrintingImg },
  { title: 'Poster Printing', image: posterPrintingImg },
  { title: 'Sticker Printing', image: stickerPrintingImg },
];

const row3 = [
  { title: 'Envelope Printing', image: envelopePrintingImg },
  { title: 'Card Printing', image: cardPrintingImg },
  { title: 'Bag Printing', image: bagPrintingImg },
  { title: 'Folder Printing', image: folderPrintingImg },
  { title: 'Badge Printing', image: badgePrintingImg },
  { title: 'Cap Printing', image: capPrintingImg },
  { title: 'Label Printing', image: labelPrintingImg },
  { title: 'Notebook 2 Printing', image: notebook2PrintingImg },
];

const renderRow = (categories) => (
  <div className="categories-grid">
    {categories.map((category, index) => (
      <div className="category-circle" key={index}>
        <div className="circle-image">
          <img src={category.image} alt={category.title} />
        </div>
        <p>{category.title}</p>
      </div>
    ))}
  </div>
);

const CategoriesSection: React.FC = () => {
  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2>Explore all categories</h2>
      </div>

      {/* Top High Demand Work */}
      {renderRow(highDemand)}

      {/* Second row */}
      {renderRow(row2)}

      {/* Third row */}
      {renderRow(row3)}
    </section>
  );
};

export default CategoriesSection;
