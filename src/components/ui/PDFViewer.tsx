"use client";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function PDFViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  return <Viewer fileUrl="/OsamaHusseinResume.pdf" plugins={[defaultLayoutPluginInstance]} />;
}
