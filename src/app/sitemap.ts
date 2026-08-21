import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: 'https://www.drankitachauhan.com/', priority: 1.0 },
    { url: 'https://www.drankitachauhan.com/about', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/pregnancy_&_obstetric_care/preconception_counselling_&_planning', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/pregnancy_&_obstetric_care/antenatal_and_postnatal_care', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/pregnancy_&_obstetric_care/normal_and_caesarean_delivery', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/pregnancy_&_obstetric_care/high-risk_pregnancy_management', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/gynecology_care/menstrual_problems_&_irregular_periods', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/gynecology_care/PCOS-management', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/gynecology_care/pelvic_infections_treatment', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/gynecology_care/menopause_care_&_counselling', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/advanced_procedures_&_surgeries/operative_hysteroscopy', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/advanced_procedures_&_surgeries/laparoscopic_surgeries', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/advanced_procedures_&_surgeries/laparoscopic_&_vaginal_hysterectomy', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/advanced_procedures_&_surgeries/perineal_repair', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/laser_gynecology/laser_treatment_for_stress_urinary_incontinence', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/laser_gynecology/vaginal_tightening_procedures', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/contact', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/blogs', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/login', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/services', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/blogs/what-causes-period-pain', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/blogs/understanding-repeated-miscarriages', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/blogs/symptoms-of-silent-pcos', priority: 0.8 },
    { url: 'https://www.drankitachauhan.com/blogs/understanding-postpartum-depression', priority: 0.8 },
  ]

  return pages.map(page => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.url === 'https://www.drankitachauhan.com/' ? 'yearly' : 'monthly',
    priority: page.priority,
  }))
}