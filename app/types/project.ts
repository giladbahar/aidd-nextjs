export interface Project {
  // חובה
  id: string;
  title: string;
  description: string;
  technologies: string[];
  
  // אופציונלי
  image?: string;           // תמונה ראשית
  images?: string[];        // גלריית תמונות (לעתיד)
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  articleUrl?: string;
  certificateUrl?: string;
  achievement?: string;     // "Winner at Hackathon 2024"
}

