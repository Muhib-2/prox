"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./VMVSplitCard.module.css";

export default function VMVSplitCard() {
  return (
    <div className={styles.card}>

      {/* ── LEFT PANEL — Vision (white) ──────────────────────── */}
      <div className={styles.left}>
        <p className={styles.panelChip}>Vision</p>
        <h3 className={styles.panelTitle}>
          Shaping Institutional Excellence Across the Region
        </h3>
        <div className={styles.goldBar} />
      </div>

      {/* ── CENTER CIRCLE — ProEx Logo ───────────────────────── */}
      <div className={styles.centerCircleWrap}>
        <div className={styles.centerRing} />  
        <div className={styles.centerCircle}>
          <Image
            src="/logo.png"
            alt="ProEx Logo"
            width={110}
            height={110}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* ── RIGHT PANEL — Mission (teal) ─────────────────────── */}
      <div className={styles.right}>
        <p className={styles.panelChipWhite}>Mission</p>
        <h3 className={styles.panelTitleWhite}>
          Driving Measurable Outcomes for Visionary Institutions
        </h3>
        <div className={styles.goldBarSmall} />
        <p className={styles.panelTextWhite}>
          To partner with visionary leaders and institutions, offering integrated
          advisory solutions that strengthen governance, enhance performance, and
          foster resilient and future-ready organizations.
        </p>

        <div className={styles.missionStats}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>50+</span>
            <span className={styles.statLabel}>Institutions Served</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>12+</span>
            <span className={styles.statLabel}>Years of Impact</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>3</span>
            <span className={styles.statLabel}>Sectors</span>
          </div>
        </div>
      </div>

    </div>
  );
}
