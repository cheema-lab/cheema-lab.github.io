import { useState } from 'react'
import { ExternalLink, Search, RotateCcw } from 'lucide-react'
import Card from '../components/Card.tsx'
import SectionHeader from '../components/SectionHeader'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useTheme } from '../context/ThemeContext'
import { useEffect } from 'react'

export default function Publications() {
  const { isDark } = useTheme()
  const [selectedYear, setSelectedYear] = useState<number | string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const publications = [
    {
      id: 1,
      year: 2026,
      title: 'Integration of protein and metabolomic blood biomarkers enhances classification of radiation exposure in X-irradiated humanized mice',
      authors: 'Deol S, Jayatilake M, Taveras M, Wang Q, Bansal S, Li Y, Wu X, Boerma M, Turner HC, Cheema AK.',
      journal: 'Int J Radiat Biol',
      doi: '10.1080/09553002.2026.2645909',
      tags: ['Radiation', 'Metabolomics', 'Proteomics'],
    },
    {
      id: 2,
      year: 2026,
      title: 'Extracellular vesicle-derived miRNA-182-5p educates macrophages towards an immunosuppressive phenotype in pancreatic cancer',
      authors: 'Singh B, Gaur P, Bose P, Zhang Y, Li Y, Zhang Z, Kandhavelu J, Klotzbier W, Jayatilake M, Bansal S, Farhan M, Deol S, Banerjee PP, Unger K, Gupta S, Verma V, Cheema AK.',
      journal: 'Signal Transduct Target Ther',
      doi: '10.1038/s41392-025-02559-3',
      tags: ['Immunology', 'Cancer'],
    },
    {
      id: 3,
      year: 2026,
      title: 'Serum Proteomic Signatures in Nonhuman Primates after Treatment with a Radiation Countermeasure and Exposure to a Partial- or Total-body Supralethal Radiation Dose',
      authors: 'Carpenter AD, Li Y, Kandhavelu J, Packer BE, Petrus SA, Fatanmi OO, Wise SY, Hauer-Jensen M, Cheema AK, Singh VK.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-25-00115.1',
      tags: ['Radiation', 'Proteomics', 'Biomarkers'],
    },
    {
      id: 4,
      year: 2026,
      title: 'Ascorbic Acid Modulates Collagen Properties in Glucocorticoid-Induced Osteoporotic Bone: Insights into Chemical, Mechanical, and Biological Regulation',
      authors: 'Curtis M, Kim Y, Patil R, Zhang X, Jayatilake M, Bulgin O, Lialios P, Surrency S, Tarrah S, Lazaris AK, Grafton A, Williams J 4th, Nouraie SB, Bizaki M, Xeron P, Van Keuren E, Seppala JE, Laiakis EC, Kitlinska JB, Alimperti S.',
      journal: 'Adv Healthc Mater',
      doi: '10.1002/adhm.202502606',
      tags: ['Research'],
    },
    {
      id: 5,
      year: 2026,
      title: 'The TREM2 R47H variant is associated with liver-plasma-brain axis dyshomeostasis in the 5xFAD mouse model of Alzheimer\'s disease',
      authors: 'Faraci G, Goodfriend B, Bishop J, Vu M, Avelar-Barragan J, Dunham SJB, Rothman JA, Whiteson KL, Cheema AK, Milinkeviciute G, Tenner AJ, LaFerla FM, MacGregor GR, Green KN, Mapstone M.',
      journal: 'Neurobiol Aging',
      doi: '10.1016/j.neurobiolaging.2026.04.007',
      tags: ['Neurodegenerative'],
    },
    {
      id: 6,
      year: 2025,
      title: 'Analysis of the Metabolomic Profile in Serum of Mice Treated with RadioDefender, a Novel Radiation Medical Countermeasure',
      authors: 'Carpenter AD, Brink MW, Li X, Li Y, Petrus SA, Fatanmi OO, Wise SY, Zhou JZ, Bansal S, Cheema AK, Singh VK.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-25-00072.1',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 7,
      year: 2025,
      title: 'Proteomic and Machine Learning Analysis Predicts Treatment Response Signatures in Myasthenia Gravis',
      authors: 'Gilbert KF, Cheema AK, Kaminski H, Kusner L.',
      journal: 'Res Sq',
      doi: '10.21203/rs.3.rs-7915342/v1',
      tags: ['Proteomics', 'Biomarkers'],
    },
    {
      id: 8,
      year: 2025,
      title: 'Serum Metabolomic Signatures in Nonhuman Primates Treated with a Countermeasure and Exposed to Partial- or Total-Body Radiation',
      authors: 'Carpenter AD, Li Y, Packer BE, Fatanmi OO, Wise SY, Petrus SA, Hauer-Jensen M, Cheema AK, Singh VK.',
      journal: 'Metabolites',
      doi: '10.3390/metabo15080546',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 9,
      year: 2025,
      title: 'Pharmacokinetic and Metabolomic Studies with BBT-059 in Nonhuman Primates Exposed to Total-Body Gamma Radiation',
      authors: 'Carpenter AD, Li Y, Miranda IM, Wise SY, Fatanmi OO, Petrus SA, Fam CM, Carlson SJ, Cox GN, Cheema AK, Singh VK.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-24-00219.1',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 10,
      year: 2025,
      title: 'Sex Differences in Urinary Metabolite Profiles between Survivors and Non-Survivors of Radiation-induced Lung Injury in the C57L/J Murine Model',
      authors: 'Pannkuk EL, Laiakis EC, Garty GY, Shuryak I, Kumar K, Suman S, Ghandhi SA, Tan Y, Ponnaiya B, Wu X, Amundson SA, Brenner DJ, Fornace AJ Jr.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-25-00066.1',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 11,
      year: 2025,
      title: 'Comparative metabolomic analysis of human lung slices (hu-PCLS) exposed to either standard or FLASH protons: a pilot study',
      authors: 'Velalopoulou A, Mak TD, Deziel A, Kim MM, Koumenis C, Christofidou-Solomidou M, Laiakis EC.',
      journal: 'Radiat Oncol',
      doi: '10.1186/s13014-025-02714-8',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 12,
      year: 2025,
      title: 'Perspectives of IABERD on biodosimetry strategies for a large-scale nuclear event',
      authors: 'Balajee AS, Badie C, Barry Flood A, Laiakis EC, Marrale M, Maltar-Strmečki N, Port M, Swarts SG, Swartz HM, Trompier F, Valente M, Wilkins RC, Yamaguchi I.',
      journal: 'Int J Radiat Biol',
      doi: '10.1080/09553002.2025.2588400',
      tags: ['Radiation', 'Biodosimetry'],
    },
    {
      id: 13,
      year: 2025,
      title: 'Long-term Radiation Signal Persistence in Urine and Blood: A Two-year Analysis in Non-human Primates Exposed to a 4 Gy Total-Body Gamma-Radiation Dose',
      authors: 'Kosowski E, Olson JD, Gardin J, Schaaf GW, Nishita D, Authier S, Chang P, Brenner DJ, Fornace AJ Jr, Cline JM, Laiakis EC.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-23-00261.1',
      tags: ['Radiation'],
    },
    {
      id: 14,
      year: 2025,
      title: 'Multicentered Biospecimen Analyses after 4 Gy Sublethal Total Body Irradiation in Rhesus Macaques',
      authors: 'McDonald JT, Rogers CJ, Nishita D, Ghandhi SA, Taraboletti A, Morton SR, Shuryak I, Bakke J, Gahagan J, Pannkuk EL, Authier S, Aryankalayil MJ, Chopra S, Sproull M, Shankavaram U, Camphausen K, Garty G, Amundson SA, Brenner DJ, Turner HC, Schaaf GW, Olson JD, Cline JM, Menon N, Laiakis EC, Fornace AJ Jr, Chang PY.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-24-00008.1',
      tags: ['Radiation'],
    },
    {
      id: 15,
      year: 2025,
      title: 'Pyruvate kinase M2 activation reprograms mitochondria in CD8 T cells, enhancing effector functions and efficacy of anti-PD1 therapy',
      authors: 'Mortazavi Farsani SS, Soni J, Jin L, Yadav AK, Bansal S, Mi T, Hilakivi-Clarke L, Clarke R, Youngblood B, Cheema A, Verma V.',
      journal: 'Cell Metab',
      doi: '10.1016/j.cmet.2025.03.003',
      tags: ['Immunology'],
    },
    {
      id: 16,
      year: 2024,
      title: 'Distinct Urinary Metabolite Signatures Mirror In Vivo Oxidative Stress-Related Radiation Responses in Mice',
      authors: 'Li Y, Bansal S, Singh B, Jayatilake MM, Klotzbier W, Boerma M, Lee MH, Hack J, Iwamoto KS, Schaue D, Cheema AK.',
      journal: 'Antioxidants (Basel)',
      doi: '10.3390/antiox14010024',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 17,
      year: 2024,
      title: 'Metabolomic changes in preterminal serum samples of rhesus macaques exposed to two different lethal doses of total-body gamma-radiation',
      authors: 'Carpenter AD, Empfield KM, Petrus SA, Fatanmi OO, Wise SY, Tyburski JB, Cheema AK, Singh VK.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-024-75225-3',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 18,
      year: 2024,
      title: 'Radiation Signature in Plasma Metabolome of Total-Body Irradiated Nonhuman Primates and Clinical Patients',
      authors: 'Tichy A, Carpenter AD, Li Y, Rydlova G, Rehulka P, Markova M, Milanova M, Chmil V, Cheema AK, Singh VK.',
      journal: 'Int J Mol Sci',
      doi: '10.3390/ijms25179208',
      tags: ['Radiation', 'Biomarkers'],
    },
    {
      id: 19,
      year: 2024,
      title: 'Pharmacokinetic and Metabolomic Studies with a Promising Radiation Countermeasure, BBT-059 (PEGylated interleukin-11), in Rhesus Nonhuman Primates',
      authors: 'Carpenter AD, Li Y, Wise SY, Fatanmi OO, Petrus SA, Fam CM, Carlson SJ, Cox GN, Cheema AK, Singh VK.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-23-00194.1',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 20,
      year: 2024,
      title: 'Proteomic analysis of plasma at the preterminal stage of rhesus nonhuman primates exposed to a lethal total-body dose of gamma-radiation',
      authors: 'Carpenter AD, Fatanmi OO, Wise SY, Tyburski JB, Cheema AK, Singh VK.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-024-64316-w',
      tags: ['Radiation', 'Proteomics'],
    },
    {
      id: 21,
      year: 2024,
      title: 'An Optimized Method for LC-MS-Based Quantification of Endogenous Organic Acids: Metabolic Perturbations in Pancreatic Cancer',
      authors: 'Jain SK, Bansal S, Bansal S, Singh B, Klotzbier W, Mehta KY, Cheema AK.',
      journal: 'Int J Mol Sci',
      doi: '10.3390/ijms25115901',
      tags: ['Metabolomics', 'Cancer'],
    },
    {
      id: 22,
      year: 2024,
      title: 'Metabolomic Profiles in Tissues of Nonhuman Primates Exposed to Either Total- or Partial-Body Radiation',
      authors: 'Carpenter AD, Li Y, Fatanmi OO, Wise SY, Petrus SA, Janocha BL, Cheema AK, Singh VK.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-23-00091.1',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 23,
      year: 2024,
      title: 'Genetic Upregulation of Activated Protein C Mitigates Delayed Effects of Acute Radiation Exposure in the Mouse Plasma',
      authors: 'Bansal S, Li Y, Bansal S, Klotzbier W, Singh B, Jayatilake M, Sridharan V, Fernández JA, Griffin JH, Weiler H, Boerma M, Cheema AK.',
      journal: 'Metabolites',
      doi: '10.3390/metabo14050245',
      tags: ['Radiation', 'Metabolomics', 'Proteomics'],
    },
    {
      id: 24,
      year: 2024,
      title: 'Aging and putative frailty biomarkers are altered by spaceflight',
      authors: 'Camera A, Tabetah M, Castañeda V, Kim J, Galsinh AS, Haro-Vinueza A, Salinas I, Seylani A, Arif S, Das S, Mori MA, Carano A, de Oliveira LC, Muratani M, Barker R, Zaksas V, Goel C, Dimokidis E, Taylor DM, Jeong J, Overbey E, Meydan C, Porterfield DM, Díaz JE, Caicedo A, Schisler JC, Laiakis EC, Mason CE, Kim MS, Karouia F, Szewczyk NJ, Beheshti A.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-024-57948-5',
      tags: ['Space', 'Biomarkers'],
    },
    {
      id: 25,
      year: 2024,
      title: 'Impact of Partial Body Shielding from Very High Dose Rates on Untargeted Metabolomics in Biodosimetry',
      authors: 'Pannkuk EL, Laiakis EC, Garty G, Bansal S, Jayatilake MM, Tan Y, Ponnaiya B, Wu X, Amundson SA, Brenner DJ, Fornace AJ Jr.',
      journal: 'ACS Omega',
      doi: '10.1021/acsomega.4c05688',
      tags: ['Radiation', 'Metabolomics', 'Biodosimetry'],
    },
    {
      id: 26,
      year: 2023,
      title: 'Metabolomic Changes in Plasma of Preterminal Stage of Rhesus Nonhuman Primates Exposed to Lethal Dose of Radiation',
      authors: 'Carpenter AD, Fatanmi OO, Wise SY, Petrus SA, Tyburski JB, Cheema AK, Singh VK.',
      journal: 'Metabolites',
      doi: '10.3390/metabo14010018',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 27,
      year: 2023,
      title: 'Analysis of the Proteomic Profile in Serum of Irradiated Nonhuman Primates Treated with Ex-Rad, a Radiation Medical Countermeasure',
      authors: 'Carpenter AD, Li Y, Janocha BL, Wise SY, Fatanmi OO, Maniar M, Cheema AK, Singh VK.',
      journal: 'J Proteome Res',
      doi: '10.1021/acs.jproteome.2c00458',
      tags: ['Radiation', 'Proteomics'],
    },
    {
      id: 28,
      year: 2023,
      title: 'Effects of proton and oxygen ion irradiation on cardiovascular function and structure in a rabbit model',
      authors: 'Nemec-Bakk AS, Sridharan V, Seawright JW, Nelson GA, Cao M, Singh P, Cheema AK, Singh B, Li Y, Koturbash I, Miousse IR, Ewing LE, Skinner CM, Landes RD, Lowery JD, Mao XW, Singh SP, Boerma M.',
      journal: 'Life Sci Space Res (Amst)',
      doi: '10.1016/j.lssr.2023.03.008',
      tags: ['Radiation', 'Space', 'Cardiovascular'],
    },
    {
      id: 29,
      year: 2023,
      title: 'Urinary Metabolomics for the Prediction of Radiation-Induced Cardiac Dysfunction',
      authors: 'Li Y, Bansal S, Sridharan V, Bansal S, Jayatilake MM, Fernández JA, Griffin JH, Boerma M, Cheema AK.',
      journal: 'Metabolites',
      doi: '10.3390/metabo13040525',
      tags: ['Radiation', 'Metabolomics', 'Cardiovascular'],
    },
    {
      id: 30,
      year: 2023,
      title: 'Radiotherapy Induces Innate Immune Responses in Patients Treated for Prostate Cancers',
      authors: 'Cheema AK, Li Y, Ventimiglia M, Kowalczyk K, Hankins R, Bandi G, Janowski EM, Grindrod S, Villagra A, Dritschilo A.',
      journal: 'Clin Cancer Res',
      doi: '10.1158/1078-0432.CCR-22-2340',
      tags: ['Immunology', 'Cancer'],
    },
    {
      id: 31,
      year: 2023,
      title: 'Effects of Whole and Partial Heart Irradiation on Collagen, Mast Cells, and Toll-like Receptor 4 in the Mouse Heart',
      authors: 'Sridharan V, Krager KJ, Pawar SA, Bansal S, Li Y, Cheema AK, Boerma M.',
      journal: 'Cancers (Basel)',
      doi: '10.3390/cancers15020406',
      tags: ['Radiation', 'Cancer', 'Cardiovascular'],
    },
    {
      id: 32,
      year: 2023,
      title: 'Analysis of the urinary metabolic profiles in irradiated rats treated with Activated Protein C (APC), a potential mitigator of radiation toxicity',
      authors: 'Bansal S, Bansal S, Fish BL, Li Y, Xu X, Fernandez JA, Griffin JH, Himburg HA, Boerma M, Medhora M, Cheema AK.',
      journal: 'Int J Radiat Biol',
      doi: '10.1080/09553002.2023.2182001',
      tags: ['Radiation', 'Proteomics'],
    },
    {
      id: 33,
      year: 2023,
      title: 'Radiation therapy promotes unsaturated fatty acids to maintain survival of glioblastoma',
      authors: 'De Martino M, Daviaud C, Minns HE, Lazarian A, Wacker A, Costa AP, Attarwala N, Chen Q, Choi SW, Rabadàn R, McIntire LBJ, Gartrell RD, Kelly JM, Laiakis EC, Vanpouille-Box C.',
      journal: 'Cancer Lett',
      doi: '10.1016/j.canlet.2023.216329',
      tags: ['Radiation', 'Cancer'],
    },
    {
      id: 34,
      year: 2023,
      title: 'Biomarker integration for improved biodosimetry of mixed neutron + photon exposures',
      authors: 'Shuryak I, Ghandhi SA, Laiakis EC, Garty G, Wu X, Ponnaiya B, Kosowski E, Pannkuk E, Kaur SP, Harken AD, Deoli N, Fornace AJ Jr, Brenner DJ, Amundson SA.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-023-37906-3',
      tags: ['Biodosimetry', 'Biomarkers'],
    },
    {
      id: 35,
      year: 2023,
      title: 'Variable Dose Rates in Realistic Radiation Exposures: Effects on Small Molecule Markers of Ionizing Radiation in the Murine Model',
      authors: 'Pannkuk EL, Laiakis EC, Garty G, Ponnaiya B, Wu X, Shuryak I, Ghandhi SA, Amundson SA, Brenner DJ, Fornace AJ.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-22-00211.1',
      tags: ['Radiation'],
    },
    {
      id: 36,
      year: 2023,
      title: 'NAD metabolism modulates inflammation and mitochondria function in diabetic kidney disease',
      authors: 'Myakala K, Wang XX, Shults NV, Krawczyk E, Jones BA, Yang X, Rosenberg AZ, Ginley B, Sarder P, Brodsky L, Jang Y, Na CH, Qi Y, Zhang X, Guha U, Wu C, Bansal S, Ma J, Cheema A, Albanese C, Hirschey MD, Yoshida T, Kopp JB, Panov J, Levi M.',
      journal: 'J Biol Chem',
      doi: '10.1016/j.jbc.2023.104975',
      tags: ['Research'],
    },
    {
      id: 37,
      year: 2023,
      title: 'Cholecystokinin Receptor Antagonist Induces Pancreatic Stellate Cell Plasticity Rendering the Tumor Microenvironment Less Oncogenic',
      authors: 'Jolly G, Duka T, Shivapurkar N, Chen W, Bansal S, Cheema A, Smith JP.',
      journal: 'Cancers (Basel)',
      doi: '10.3390/cancers15102811',
      tags: ['Cancer'],
    },
    {
      id: 38,
      year: 2022,
      title: 'Identification of Novel Biomarkers for Acute Radiation Injury Using Multiomics Approach and Nonhuman Primate Model',
      authors: 'Cheema AK, Li Y, Moulton J, Girgis M, Wise SY, Carpenter A, Fatanmi OO, Singh VK.',
      journal: 'Int J Radiat Oncol Biol Phys',
      doi: '10.1016/j.ijrobp.2022.05.046',
      tags: ['Radiation', 'Biomarkers'],
    },
    {
      id: 39,
      year: 2022,
      title: 'Pharmacokinetic and metabolomic studies with a BIO 300 Oral Powder formulation in nonhuman primates',
      authors: 'Li Y, Girgis M, Jayatilake M, Serebrenik AA, Cheema AK, Kaytor MD, Singh VK.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-022-17807-7',
      tags: ['Metabolomics'],
    },
    {
      id: 40,
      year: 2022,
      title: 'A multi-omics approach identifies pancreatic cancer cell extracellular vesicles as mediators of the unfolded protein response in normal pancreatic epithelial cells',
      authors: 'Hinzman CP, Singh B, Bansal S, Li Y, Iliuk A, Girgis M, Herremans KM, Trevino JG, Singh VK, Banerjee PP, Cheema AK.',
      journal: 'J Extracell Vesicles',
      doi: '10.1002/jev2.12232',
      tags: ['Cancer', 'Proteomics'],
    },
    {
      id: 41,
      year: 2022,
      title: 'An optimized method for the isolation of urinary extracellular vesicles for molecular phenotyping: detection of biomarkers for radiation exposure',
      authors: 'Hinzman CP, Jayatilake M, Bansal S, Fish BL, Li Y, Zhang Y, Bansal S, Girgis M, Iliuk A, Xu X, Fernandez JA, Griffin JH, Ballew EA, Unger K, Boerma M, Medhora M, Cheema AK.',
      journal: 'J Transl Med',
      doi: '10.1186/s12967-022-03414-7',
      tags: ['Radiation', 'Biomarkers'],
    },
    {
      id: 42,
      year: 2022,
      title: 'Application of radiation omics in the development of adverse outcome pathway networks: an example of radiation-induced cardiovascular disease',
      authors: 'Azimzadeh O, Moertl S, Ramadan R, Baselet B, Laiakis EC, Sebastian S, Beaton D, Hartikainen JM, Kaiser JC, Beheshti A, Salomaa S, Chauhan V, Hamada N.',
      journal: 'Int J Radiat Biol',
      doi: '10.1080/09553002.2022.2110325',
      tags: ['Radiation', 'Cardiovascular'],
    },
    {
      id: 43,
      year: 2022,
      title: 'Effect of the p38 Mitogen-Activated Protein Kinase Signaling Cascade on Radiation Biodosimetry',
      authors: 'Broustas CG, Mukherjee S, Pannkuk EL, Laiakis EC, Fornace AJ, Amundson SA.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-21-00240.1',
      tags: ['Radiation', 'Proteomics', 'Biodosimetry'],
    },
    {
      id: 44,
      year: 2022,
      title: 'Small Molecule Signatures of Mice Lacking T-cell p38 Alternate Activation, a Model for Immunosuppression Conditions, after Total-Body Irradiation',
      authors: 'Pannkuk EL, Laiakis EC, Angdisen J, Jayatilake MM, Ake P, Lin LY, Li HH, Fornace AJ.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-21-00199.1',
      tags: ['Radiation', 'Biomarkers'],
    },
    {
      id: 45,
      year: 2022,
      title: 'Biofluid Metabolomics and Lipidomics of Mice Exposed to External Very High-Dose Rate Radiation',
      authors: 'Pannkuk EL, Laiakis EC, Garty G, Bansal S, Ponnaiya B, Wu X, Ghandhi SA, Amundson SA, Brenner DJ, Fornace AJ Jr.',
      journal: 'Metabolites',
      doi: '10.3390/metabo12060520',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 46,
      year: 2022,
      title: 'Quantitative proteomic analytic approaches to identify metabolic changes in the medial prefrontal cortex of rats exposed to space radiation',
      authors: 'Laiakis EC, Pinheiro M, Nguyen T, Nguyen H, Beheshti A, Dutta SM, Russell WK, Emmett MR, Britten RA.',
      journal: 'Front Physiol',
      doi: '10.3389/fphys.2022.971282',
      tags: ['Radiation', 'Proteomics', 'Space'],
    },
    {
      id: 47,
      year: 2021,
      title: 'TGFβ Drives Metabolic Perturbations during Epithelial Mesenchymal Transition in Pancreatic Cancer: TGFβ Induced EMT in PDAC',
      authors: 'Rajagopal MU, Bansal S, Kaur P, Jain SK, Altadil T, Hinzman CP, Li Y, Moulton J, Singh B, Bansal S, Chauthe SK, Singh R, Banerjee PP, Mapstone M, Fiandaca MS, Federoff HJ, Unger K, Smith JP, Cheema AK.',
      journal: 'Cancers (Basel)',
      doi: '10.3390/cancers13246204',
      tags: ['Cancer'],
    },
    {
      id: 48,
      year: 2021,
      title: 'Microbiome study in irradiated mice treated with BIO 300, a promising radiation countermeasure',
      authors: 'Cheema AK, Li Y, Singh J, Johnson R, Girgis M, Wise SY, Fatanmi OO, Kaytor MD, Singh VK.',
      journal: 'Anim Microbiome',
      doi: '10.1186/s42523-021-00132-1',
      tags: ['Radiation'],
    },
    {
      id: 49,
      year: 2021,
      title: 'Metabolomics-based predictive biomarkers of radiation injury and countermeasure efficacy: current status and future perspectives',
      authors: 'Singh VK, Seed TM, Cheema AK.',
      journal: 'Expert Rev Mol Diagn',
      doi: '10.1080/14737159.2021.1933448',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 50,
      year: 2021,
      title: 'Marker-assisted pyramiding of lycopene-ε-cyclase, β-carotene hydroxylase1 and opaque2 genes for development of biofortified maize hybrids',
      authors: 'Singh J, Sharma S, Kaur A, Vikal Y, Cheema AK, Bains BK, Kaur N, Gill GK, Malhotra PK, Kumar A, Sharma P, Muthusamy V, Kaur A, Chawla JS, Hossain F.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-021-92010-8',
      tags: ['Research'],
    },
    {
      id: 51,
      year: 2021,
      title: 'Analysis of the metabolomic profile in serum of irradiated nonhuman primates treated with Ex-Rad, a radiation countermeasure',
      authors: 'Li Y, Girgis M, Wise SY, Fatanmi OO, Seed TM, Maniar M, Cheema AK, Singh VK.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-021-91067-9',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 52,
      year: 2021,
      title: 'Transcriptome of rhesus macaque (Macaca mulatta) exposed to total-body irradiation',
      authors: 'Li Y, Singh J, Varghese R, Zhang Y, Fatanmi OO, Cheema AK, Singh VK.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-021-85669-6',
      tags: ['Radiation'],
    },
    {
      id: 53,
      year: 2021,
      title: 'Associations of methyl donor and methylation inhibitor levels during anti-oxidant therapy in heart failure',
      authors: 'Joseph J, Giczewska A, Alhanti B, Cheema AK, Handy DE, Mann DL, Loscalzo J, Givertz MM.',
      journal: 'J Physiol Biochem',
      doi: '10.1007/s13105-021-00797-x',
      tags: ['Cardiovascular'],
    },
    {
      id: 54,
      year: 2021,
      title: 'Microbiome for Mars: surveying microbiome connections to healthcare with implications for long-duration human spaceflight, virtual workshop, July 13, 2020',
      authors: 'LaPelusa M, Donoviel D, Branzini SE, Carlson PE Jr, Culler S, Cheema AK, Kaddurah-Daouk R, Kelly D, de Cremoux I, Knight R, Krajmalnik-Brown R, Mayo SL, Mazmanian SK, Mayer EA, Petrosino JF, Garrison K.',
      journal: 'Microbiome',
      doi: '10.1186/s40168-020-00951-5',
      tags: ['Space'],
    },
    {
      id: 55,
      year: 2021,
      title: 'Longitudinal metabolic alterations in plasma of rats exposed to low doses of high linear energy transfer radiation',
      authors: 'Dissmore T, DeMarco AG, Jayatilake M, Girgis M, Bansal S, Li Y, Mehta K, Sridharan V, Gill K, Bansal S, Tyburski JB, Cheema AK.',
      journal: 'J Environ Sci Health C Toxicol Carcinog',
      doi: '10.1080/26896583.2020.1865027',
      tags: ['Radiation'],
    },
    {
      id: 56,
      year: 2021,
      title: 'Short-term metabolic disruptions in urine of mouse models following exposure to low doses of oxygen ion radiation',
      authors: 'Girgis M, Li Y, Jayatilake M, Gill K, Wang S, Makambi K, Sridharan V, Cheema AK.',
      journal: 'J Environ Sci Health C Toxicol Carcinog',
      doi: '10.1080/26896583.2020.1868866',
      tags: ['Radiation'],
    },
    {
      id: 57,
      year: 2021,
      title: 'Introduction to the Second Bill Morgan Memorial Special Issue: an update on low dose biology, epidemiology, its integration and implications for radiation protection',
      authors: 'Hamada N, Laiakis EC, Zablotska LB, Cullings HM.',
      journal: 'Int J Radiat Biol',
      doi: '10.1080/09553002.2021.1918972',
      tags: ['Radiation'],
    },
    {
      id: 58,
      year: 2021,
      title: 'Summary of the Second Bill Morgan Memorial Symposium: an update on low dose biology, epidemiology, its integration and implications for radiation protection',
      authors: 'Laiakis EC, Chauhan V, Little MP, Woloschak GE, Weil MM, Hamada N.',
      journal: 'Int J Radiat Biol',
      doi: '10.1080/09553002.2020.1855373',
      tags: ['Radiation'],
    },
    {
      id: 59,
      year: 2021,
      title: 'Effects of Low Dose Space Radiation Exposures on the Splenic Metabolome',
      authors: 'Laiakis EC, Shuryak I, Deziel A, Wang YW, Barnette BL, Yu Y, Ullrich RL, Fornace AJ Jr, Emmett MR.',
      journal: 'Int J Mol Sci',
      doi: '10.3390/ijms22063070',
      tags: ['Radiation', 'Space'],
    },
    {
      id: 60,
      year: 2021,
      title: 'Biofluid Metabolomics of Mice Exposed to External Low-Dose Rate Radiation in a Novel Irradiation System, the Variable Dose-Rate External (137)Cs Irradiator',
      authors: 'Pannkuk EL, Laiakis EC, Girgis M, Garty GY, Morton SR, Pujol-Canadell M, Ghandhi SA, Amundson SA, Brenner DJ, Fornace AJ Jr.',
      journal: 'J Proteome Res',
      doi: '10.1021/acs.jproteome.1c00638',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 61,
      year: 2021,
      title: 'Hepatic lipid signatures of little brown bats (Myotis lucifugus) and big brown bats (Eptesicus fuscus) at early stages of white-nose syndrome',
      authors: 'Pannkuk EL, Dorville NAS, Dzal YA, Fletcher QE, Norquay KJO, Willis CKR, Fornace AJ Jr, Laiakis EC.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-021-90828-w',
      tags: ['Biomarkers'],
    },
    {
      id: 62,
      year: 2021,
      title: 'Small Molecule Responses to Sequential Irradiation with Neutrons and Photons for Biodosimetry Applications: An Initial Assessment',
      authors: 'Laiakis EC, Canadell MP, Grilj V, Harken AD, Garty GY, Brenner DJ, Smilenov L, Fornace AJ.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-20-00032.1',
      tags: ['Radiation', 'Biodosimetry'],
    },
    {
      id: 63,
      year: 2020,
      title: 'Comparative proteomic analysis of serum from nonhuman primates administered BIO 300: a promising radiation countermeasure',
      authors: 'Girgis M, Li Y, Ma J, Sanda M, Wise SY, Fatanmi OO, Kaytor MD, Cheema AK, Singh VK.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-020-76494-4',
      tags: ['Radiation', 'Proteomics'],
    },
    {
      id: 64,
      year: 2020,
      title: 'Plasma metabolite biomarkers predictive of radiation induced cardiotoxicity',
      authors: 'Unger K, Li Y, Yeh C, Barac A, Srichai MB, Ballew EA, Girgis M, Jayatilake M, Sridharan V, Boerma M, Cheema AK.',
      journal: 'Radiother Oncol',
      doi: '10.1016/j.radonc.2020.04.018',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 65,
      year: 2020,
      title: 'Integrated Datasets of Proteomic and Metabolomic Biomarkers to Predict Its Impacts on Comorbidities of Type 2 Diabetes Mellitus',
      authors: 'Cheema AK, Kaur P, Fadel A, Younes N, Zirie M, Rizk NM.',
      journal: 'Diabetes Metab Syndr Obes',
      doi: '10.2147/DMSO.S244432',
      tags: ['Metabolomics', 'Proteomics', 'Biomarkers'],
    },
    {
      id: 66,
      year: 2020,
      title: 'Identification of Plasma Lipidome Changes Associated with Low Dose Space-Type Radiation Exposure in a Murine Model',
      authors: 'Upadhyay M, Rajagopal M, Gill K, Li Y, Bansal S, Sridharan V, Tyburski JB, Boerma M, Cheema AK.',
      journal: 'Metabolites',
      doi: '10.3390/metabo10060252',
      tags: ['Radiation', 'Metabolomics', 'Space'],
    },
    {
      id: 67,
      year: 2020,
      title: 'Alterations in Tissue Metabolite Profiles with Amifostine-Prophylaxed Mice Exposed to Gamma Radiation',
      authors: 'Cheema AK, Li Y, Girgis M, Jayatilake M, Fatanmi OO, Wise SY, Seed TM, Singh VK.',
      journal: 'Metabolites',
      doi: '10.3390/metabo10050211',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 68,
      year: 2020,
      title: 'Metabolic correlates of prevalent mild cognitive impairment and Alzheimer\'s disease in adults with Down syndrome',
      authors: 'Mapstone M, Gross TJ, Macciardi F, Cheema AK, Petersen M, Head E, Handen BL, Klunk WE, Christian BT, Silverman W, Lott IT, Schupf N; Alzheimer\'s Biomarkers Consortium–Down Syndrome (ABC‐DS) Investigators.',
      journal: 'Alzheimers Dement (Amst)',
      doi: '10.1002/dad2.12028',
      tags: ['Neurodegenerative'],
    },
    {
      id: 69,
      year: 2020,
      title: 'The ABRF Metabolomics Research Group 2016 Exploratory Study: Investigation of Data Analysis Methods for Untargeted Metabolomics',
      authors: 'Turck CW, Mak TD, Goudarzi M, Salek RM, Cheema AK.',
      journal: 'Metabolites',
      doi: '10.3390/metabo10040128',
      tags: ['Metabolomics'],
    },
    {
      id: 70,
      year: 2020,
      title: 'Recent Advances in Systems and Network Medicine: Meeting Report from the First International Conference in Systems and Network Medicine',
      authors: 'Kurnat-Thoma E, Baranova A, Baird P, Brodsky E, Butte AJ, Cheema AK, Cheng F, Dutta S, Grant C, Giordano J, Maitland-van der Zee AH, Fridsma DB, Jarrin R, Kann MG, Keeney J, Loscalzo J, Madhavan G, Maron BA, McBride DK, McKean M, Mun SK, Palmer JC, Patel B, Parakh K, Pariser AR, Pristipino C, Radstake TRDJ, Rajasimha HK, Rouse WB, Rozman D, Saleh A, Schmidt HHHW, Schultz N, Sethi T, Silverman EK, Skopac J, Svab I, Trujillo S, Valentine JE, Verma D, West BJ, Vasudevan S.',
      journal: 'Syst Med (New Rochelle)',
      doi: '10.1089/sysm.2020.0001',
      tags: ['Research'],
    },
    {
      id: 71,
      year: 2020,
      title: 'Dysregulated metabolic pathways in age-related macular degeneration',
      authors: 'Zhang M, Jiang N, Chu Y, Postnikova O, Varghese R, Horvath A, Cheema AK, Golestaneh N.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-020-59244-4',
      tags: ['Research'],
    },
    {
      id: 72,
      year: 2020,
      title: 'Author Correction: Plasma microRNA markers of upper limb recovery following human stroke',
      authors: 'Edwardson MA, Zhong X, Fiandaca MS, Federoff HJ, Cheema AK, Dromerick AW.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-020-58943-2',
      tags: ['Research'],
    },
    {
      id: 73,
      year: 2020,
      title: 'Comprehensive Multi-omics Analysis Reveals Mitochondrial Stress as a Central Biological Hub for Spaceflight Impact',
      authors: 'da Silveira WA, Fazelinia H, Rosenthal SB, Laiakis EC, Kim MS, Meydan C, Kidane Y, Rathi KS, Smith SM, Stear B, Ying Y, Zhang Y, Foox J, Zanello S, Crucian B, Wang D, Nugent A, Costa HA, Zwart SR, Schrepfer S, Elworth RAL, Sapoval N, Treangen T, MacKay M, Gokhale NS, Horner SM, Singh LN, Wallace DC, Willey JS, Schisler JC, Meller R, McDonald JT, Fisch KM, Hardiman G, Taylor D, Mason CE, Costes SV, Beheshti A.',
      journal: 'Cell',
      doi: '10.1016/j.cell.2020.11.002',
      tags: ['Space'],
    },
    {
      id: 74,
      year: 2020,
      title: 'Metabolomic approaches to study the tumor microenvironment',
      authors: 'Astarita G, Dhungana S, Shrestha B, Laiakis EC.',
      journal: 'Methods Enzymol',
      doi: '10.1016/bs.mie.2019.07.037',
      tags: ['Metabolomics', 'Cancer'],
    },
    {
      id: 75,
      year: 2020,
      title: 'Effect of 3,3\'-Diindolylmethane on Pulmonary Injury Following Thoracic Irradiation in CBA Mice',
      authors: 'Laiakis EC, McCart EA, Deziel A, Rittase WB, Bouten RM, Jha J, Wilkins WL, Day RM, Fornace AJ Jr.',
      journal: 'Health Phys',
      doi: '10.1097/HP.0000000000001257',
      tags: ['Radiation'],
    },
    {
      id: 76,
      year: 2020,
      title: 'VADER: a variable dose-rate external (137)Cs irradiator for internal emitter and low dose rate studies',
      authors: 'Garty G, Xu Y, Johnson GW, Smilenov LB, Joseph SK, Pujol-Canadell M, Turner HC, Ghandhi SA, Wang Q, Shih R, Morton RC, Cuniberti DE, Morton SR, Bueno-Beti C, Morgan TL, Caracappa PF, Laiakis EC, Fornace AJ Jr, Amundson SA, Brenner DJ.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-020-76941-2',
      tags: ['Radiation'],
    },
    {
      id: 77,
      year: 2020,
      title: 'Disparate Metabolomics Data Reassembler: A Novel Algorithm for Agglomerating Incongruent LC-MS Metabolomics Datasets',
      authors: 'Mak TD, Goudarzi M, Laiakis EC, Stein SE.',
      journal: 'Anal Chem',
      doi: '10.1021/acs.analchem.9b05763',
      tags: ['Metabolomics'],
    },
    {
      id: 78,
      year: 2020,
      title: 'Serum Metabolomic Alterations Associated with Cesium-137 Internal Emitter Delivered in Various Dose Rates',
      authors: 'Li HH, Lin YT, Laiakis EC, Goudarzi M, Weber W, Fornace AJ Jr.',
      journal: 'Metabolites',
      doi: '10.3390/metabo10070270',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 79,
      year: 2020,
      title: 'Quantitation of Urinary Acylcarnitines by DMS-MS/MS Uncovers the Effects of Total Body Irradiation in Cancer Patients',
      authors: 'Vera NB, Coy SL, Laiakis EC, Fornace AJ Jr, Clasquin M, Barker CA, Pfefferkorn JA, Vouros P.',
      journal: 'J Am Soc Mass Spectrom',
      doi: '10.1021/jasms.9b00076',
      tags: ['Radiation', 'Cancer'],
    },
    {
      id: 80,
      year: 2020,
      title: 'Irradiation of the kidneys causes pathologic remodeling in the nontargeted heart: A role for the immune system',
      authors: 'Lenarczyk M, Laiakis EC, Mattson DL, Johnson BD, Kronenberg A, North PE, Komorowski R, Mäder M, Baker JE.',
      journal: 'FASEB Bioadv',
      doi: '10.1096/fba.2020-00071',
      tags: ['Radiation', 'Immunology', 'Cardiovascular'],
    },
    {
      id: 81,
      year: 2020,
      title: 'Effects of Genetic Variation on Urinary Small Molecule Signatures of Mice after Exposure to Ionizing Radiation: A Study of p53 Deficiency',
      authors: 'Pannkuk EL, Laiakis EC, Ake P, Strawn SJ, Wang YW, Fornace AJ Jr.',
      journal: 'Metabolites',
      doi: '10.3390/metabo10060234',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 82,
      year: 2019,
      title: 'Changes in one-carbon metabolism and DNA methylation in the hearts of mice exposed to space environment-relevant doses of oxygen ions ((16)O)',
      authors: 'Miousse IR, Skinner CM, Sridharan V, Seawright JW, Singh P, Landes RD, Cheema AK, Hauer-Jensen M, Boerma M, Koturbash I.',
      journal: 'Life Sci Space Res (Amst)',
      doi: '10.1016/j.lssr.2019.05.003',
      tags: ['Radiation', 'Space', 'Cardiovascular'],
    },
    {
      id: 83,
      year: 2019,
      title: 'Metabolomic Studies of Tissue Injury in Nonhuman Primates Exposed to Gamma-Radiation',
      authors: 'Cheema AK, Mehta KY, Rajagopal MU, Wise SY, Fatanmi OO, Singh VK.',
      journal: 'Int J Mol Sci',
      doi: '10.3390/ijms20133360',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 84,
      year: 2019,
      title: 'Metabolomic studies in tissues of mice treated with amifostine and exposed to gamma-radiation',
      authors: 'Cheema AK, Li Y, Girgis M, Jayatilake M, Simas M, Wise SY, Olabisi AO, Seed TM, Singh VK.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-019-52120-w',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 85,
      year: 2019,
      title: 'Metabolomics Test Materials for Quality Control: A Study of a Urine Materials Suite',
      authors: 'Bearden DW, Sheen DA, Simón-Manso Y, Benner BA Jr, Rocha WFC, Blonder N, Lippa KA, Beger RD, Schnackenberg LK, Sun J, Mehta KY, Cheema AK, Gu H, Marupaka R, Nagana Gowda GA, Raftery D.',
      journal: 'Metabolites',
      doi: '10.3390/metabo9110270',
      tags: ['Metabolomics'],
    },
    {
      id: 86,
      year: 2019,
      title: 'Plasma metabolites related to cellular energy metabolism are altered in adults with Down syndrome and Alzheimer\'s disease',
      authors: 'Gross TJ, Doran E, Cheema AK, Head E, Lott IT, Mapstone M.',
      journal: 'Dev Neurobiol',
      doi: '10.1002/dneu.22716',
      tags: ['Metabolomics', 'Neurodegenerative'],
    },
    {
      id: 87,
      year: 2019,
      title: 'Plasma-derived extracellular vesicles yield predictive markers of cranial irradiation exposure in mice',
      authors: 'Hinzman CP, Baulch JE, Mehta KY, Girgis M, Bansal S, Gill K, Li Y, Limoli CL, Cheema AK.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-019-45970-x',
      tags: ['Radiation'],
    },
    {
      id: 88,
      year: 2019,
      title: 'Pharmacokinetic and Metabolomic Studies with BIO 300, a Nanosuspension of Genistein, in a Nonhuman Primate Model',
      authors: 'Cheema AK, Mehta KY, Santiago PT, Fatanmi OO, Kaytor MD, Singh VK.',
      journal: 'Int J Mol Sci',
      doi: '10.3390/ijms20051231',
      tags: ['Metabolomics'],
    },
    {
      id: 89,
      year: 2019,
      title: 'Discovery of Metabolic Biomarkers Predicting Radiation Therapy Late Effects in Prostate Cancer Patients',
      authors: 'Cheema AK, Grindrod S, Zhong X, Jain S, Menon SS, Mehta KY, Suy S, Collins S, Wang Y, Timofeeva O, Bandi G, Pahira J, Kowalczyk K, Lynch J, Dritschilo A.',
      journal: 'Adv Exp Med Biol',
      doi: '10.1007/978-3-030-22254-3_11',
      tags: ['Radiation', 'Cancer', 'Biomarkers'],
    },
    {
      id: 90,
      year: 2019,
      title: 'Metabolomic Applications in Radiation Biodosimetry',
      authors: 'Laiakis EC.',
      journal: 'Methods Mol Biol',
      doi: '10.1007/978-1-4939-9236-2_24',
      tags: ['Radiation', 'Metabolomics', 'Biodosimetry'],
    },
    {
      id: 91,
      year: 2019,
      title: 'Fabric Phase Sorptive Extraction-A Metabolomic Preprocessing Approach for Ionizing Radiation Exposure Assessment',
      authors: 'Taraboletti A, Goudarzi M, Kabir A, Moon BH, Laiakis EC, Lacombe J, Ake P, Shoishiro S, Brenner D, Fornace AJ Jr, Zenhausern F.',
      journal: 'J Proteome Res',
      doi: '10.1021/acs.jproteome.9b00142',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 92,
      year: 2019,
      title: 'Serum lipidomic analysis from mixed neutron/X-ray radiation fields reveals a hyperlipidemic and pro-inflammatory phenotype',
      authors: 'Laiakis EC, Canadell MP, Grilj V, Harken AD, Garty GY, Astarita G, Brenner DJ, Smilenov L, Fornace AJ Jr.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-019-41083-7',
      tags: ['Radiation'],
    },
    {
      id: 93,
      year: 2019,
      title: 'Salivary Metabolomics of Total Body Irradiated Nonhuman Primates Reveals Long-Term Normal Tissue Responses to Radiation',
      authors: 'Laiakis EC, Nishita D, Bujold K, Jayatilake MM, Bakke J, Gahagen J, Authier S, Chang P, Fornace AJ Jr.',
      journal: 'Int J Radiat Oncol Biol Phys',
      doi: '10.1016/j.ijrobp.2019.07.017',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 94,
      year: 2019,
      title: 'Liquid Chromatography-Mass Spectrometry-Based Metabolomics of Nonhuman Primates after 4 Gy Total Body Radiation Exposure: Global Effects and Targeted Panels',
      authors: 'Pannkuk EL, Laiakis EC, Gill K, Jain SK, Mehta KY, Nishita D, Bujold K, Bakke J, Gahagen J, Authier S, Chang P, Fornace AJ Jr.',
      journal: 'J Proteome Res',
      doi: '10.1021/acs.jproteome.9b00101',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 95,
      year: 2019,
      title: 'Impact of inflammatory signaling on radiation biodosimetry: mouse model of inflammatory bowel disease',
      authors: 'Mukherjee S, Laiakis EC, Fornace AJ Jr, Amundson SA.',
      journal: 'BMC Genomics',
      doi: '10.1186/s12864-019-5689-y',
      tags: ['Radiation', 'Biodosimetry'],
    },
    {
      id: 96,
      year: 2019,
      title: 'Temporal Effects on Radiation Responses in Nonhuman Primates: Identification of Biofluid Small Molecule Signatures by Gas Chromatography⁻Mass Spectrometry Metabolomics',
      authors: 'Pannkuk EL, Laiakis EC, Girgis M, Dowd SE, Dhungana S, Nishita D, Bujold K, Bakke J, Gahagen J, Authier S, Chang PY, Fornace AJ.',
      journal: 'Metabolites',
      doi: '10.3390/metabo9050098',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 97,
      year: 2018,
      title: 'Plasma Derived Exosomal Biomarkers of Exposure to Ionizing Radiation in Nonhuman Primates',
      authors: 'Cheema AK, Hinzman CP, Mehta KY, Hanlon BK, Garcia M, Fatanmi OO, Singh VK.',
      journal: 'Int J Mol Sci',
      doi: '10.3390/ijms19113427',
      tags: ['Radiation', 'Biomarkers'],
    },
    {
      id: 98,
      year: 2018,
      title: 'Poisoning with Soman, an Organophosphorus Nerve Agent, Alters Fecal Bacterial Biota and Urine Metabolites: a Case for Novel Signatures for Asymptomatic Nerve Agent Exposure',
      authors: 'Getnet D, Gautam A, Kumar R, Hoke A, Cheema AK, Rossetti F, Schultz CR, Hammamieh R, Lumley LA, Jett M.',
      journal: 'Appl Environ Microbiol',
      doi: '10.1128/AEM.00978-18',
      tags: ['Metabolomics', 'Biomarkers'],
    },
    {
      id: 99,
      year: 2018,
      title: 'Exposure to Ionizing Radiation Causes Endoplasmic Reticulum Stress in the Mouse Hippocampus',
      authors: 'Hinzman CP, Baulch JE, Mehta KY, Gill K, Limoli CL, Cheema AK.',
      journal: 'Radiat Res',
      doi: '10.1667/RR15061.1',
      tags: ['Radiation'],
    },
    {
      id: 100,
      year: 2018,
      title: 'Proteomic Changes in Mouse Spleen after Radiation-Induced Injury and its Modulation by Gamma-Tocotrienol',
      authors: 'Cheema AK, Byrum SD, Sharma NK, Altadill T, Kumar VP, Biswas S, Balgley BM, Hauer-Jensen M, Tackett AJ, Ghosh SP.',
      journal: 'Radiat Res',
      doi: '10.1667/RR15008.1',
      tags: ['Radiation', 'Proteomics'],
    },
    {
      id: 101,
      year: 2018,
      title: 'Potential Metabolomic Linkage in Blood between Parkinson\'s Disease and Traumatic Brain Injury',
      authors: 'Fiandaca MS, Gross TJ, Johnson TM, Hu MT, Evetts S, Wade-Martins R, Merchant-Borna K, Bazarian J, Cheema AK, Mapstone M, Federoff HJ.',
      journal: 'Metabolites',
      doi: '10.3390/metabo8030050',
      tags: ['Metabolomics', 'Neurodegenerative'],
    },
    {
      id: 102,
      year: 2018,
      title: 'Plasma microRNA markers of upper limb recovery following human stroke',
      authors: 'Edwardson MA, Zhong X, Fiandaca MS, Federoff HJ, Cheema AK, Dromerick AW.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-018-31020-5',
      tags: ['Research'],
    },
    {
      id: 103,
      year: 2018,
      title: 'Metabolomics based predictive classifier for early detection of pancreatic ductal adenocarcinoma',
      authors: 'Unger K, Mehta KY, Kaur P, Wang Y, Menon SS, Jain SK, Moonjelly RA, Suman S, Datta K, Singh R, Fogel P, Cheema AK.',
      journal: 'Oncotarget',
      doi: '10.18632/oncotarget.25212',
      tags: ['Metabolomics', 'Cancer'],
    },
    {
      id: 104,
      year: 2018,
      title: 'Plasma metabolomic biomarkers accurately classify acute mild traumatic brain injury from controls',
      authors: 'Fiandaca MS, Mapstone M, Mahmoodi A, Gross T, Macciardi F, Cheema AK, Merchant-Borna K, Bazarian J, Federoff HJ.',
      journal: 'PLoS One',
      doi: '10.1371/journal.pone.0195318',
      tags: ['Metabolomics', 'Neurodegenerative', 'Biomarkers'],
    },
    {
      id: 105,
      year: 2018,
      title: 'Toward Reproducible Results from Targeted Metabolomic Studies: Perspectives for Data Pre-processing and a Basis for Analytic Pipeline Development',
      authors: 'Gross T, Mapstone M, Miramontes R, Padilla R, Cheema AK, Macciardi F, Federoff HJ, Fiandaca MS.',
      journal: 'Curr Top Med Chem',
      doi: '10.2174/1568026618666180711144323',
      tags: ['Metabolomics'],
    },
    {
      id: 106,
      year: 2018,
      title: 'A phase I study of intravenous artesunate in patients with advanced solid tumor malignancies',
      authors: 'Deeken JF, Wang H, Hartley M, Cheema AK, Smaglo B, Hwang JJ, He AR, Weiner LM, Marshall JL, Giaccone G, Liu S, Luecht J, Spiegel JY, Pishvaian MJ.',
      journal: 'Cancer Chemother Pharmacol',
      doi: '10.1007/s00280-018-3533-8',
      tags: ['Cancer'],
    },
    {
      id: 107,
      year: 2018,
      title: 'Global metabolomic responses in urine from atm deficient mice in response to LD(50/30) gamma irradiation doses',
      authors: 'Laiakis EC, Mak TD, Strawn SJ, Wang YW, Moon BH, Ake P, Fornace AJ Jr.',
      journal: 'Environ Mol Mutagen',
      doi: '10.1002/em.22202',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 108,
      year: 2018,
      title: 'Nonhuman Primates with Acute Radiation Syndrome: Results from a Global Serum Metabolomics Study after 7.2 Gy Total-Body Irradiation',
      authors: 'Pannkuk EL, Laiakis EC, Garcia M, Fornace AJ Jr, Singh VK.',
      journal: 'Radiat Res',
      doi: '10.1667/RR15167.1',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 109,
      year: 2018,
      title: 'A Metabolomic Serum Signature from Nonhuman Primates Treated with a Radiation Countermeasure, Gamma-tocotrienol, and Exposed to Ionizing Radiation',
      authors: 'Pannkuk EL, Laiakis EC, Fornace AJ Jr, Fatanmi OO, Singh VK.',
      journal: 'Health Phys',
      doi: '10.1097/HP.0000000000000776',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 110,
      year: 2018,
      title: 'Differential mobility spectrometry (DMS) reveals the elevation of urinary acetylcarnitine in non-human primates (NHPs) exposed to radiation',
      authors: 'Vera NB, Chen Z, Pannkuk E, Laiakis EC, Fornace AJ Jr, Erion DM, Coy SL, Pfefferkorn JA, Vouros P.',
      journal: 'J Mass Spectrom',
      doi: '10.1002/jms.4085',
      tags: ['Radiation'],
    },
    {
      id: 111,
      year: 2018,
      title: 'Differential Mobility Spectrometry-Mass Spectrometry (DMS-MS) in Radiation Biodosimetry: Rapid and High-Throughput Quantitation of Multiple Radiation Biomarkers in Nonhuman Primate Urine',
      authors: 'Chen Z, Coy SL, Pannkuk EL, Laiakis EC, Fornace AJ Jr, Vouros P.',
      journal: 'J Am Soc Mass Spectrom',
      doi: '10.1007/s13361-018-1977-z',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 112,
      year: 2017,
      title: 'A Metabolomic and Lipidomic Serum Signature from Nonhuman Primates Administered with a Promising Radiation Countermeasure, Gamma-Tocotrienol',
      authors: 'Cheema AK, Mehta KY, Fatanmi OO, Wise SY, Hinzman CP, Wolff J, Singh VK.',
      journal: 'Int J Mol Sci',
      doi: '10.3390/ijms19010079',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 113,
      year: 2017,
      title: 'EGR1 regulates cellular metabolism and survival in endocrine resistant breast cancer',
      authors: 'Shajahan-Haq AN, Boca SM, Jin L, Bhuvaneshwar K, Gusev Y, Cheema AK, Demas DD, Raghavan KS, Michalek R, Madhavan S, Clarke R.',
      journal: 'Oncotarget',
      doi: '10.18632/oncotarget.18292',
      tags: ['Cancer'],
    },
    {
      id: 114,
      year: 2017,
      title: 'Metabolomic biomarkers of pancreatic cancer: a meta-analysis study',
      authors: 'Mehta KY, Wu HJ, Menon SS, Fallah Y, Zhong X, Rizk N, Unger K, Mapstone M, Fiandaca MS, Federoff HJ, Cheema AK.',
      journal: 'Oncotarget',
      doi: '10.18632/oncotarget.20324',
      tags: ['Metabolomics', 'Cancer', 'Biomarkers'],
    },
    {
      id: 115,
      year: 2017,
      title: 'Metabolomic and Lipidomic Profiling Identifies The Role of the RNA Editing Pathway in Endometrial Carcinogenesis',
      authors: 'Altadill T, Dowdy TM, Gill K, Reques A, Menon SS, Moiola CP, Lopez-Gil C, Coll E, Matias-Guiu X, Cabrera S, Garcia A, Reventos J, Byers SW, Gil-Moreno A, Cheema AK, Colas E.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-017-09169-2',
      tags: ['Metabolomics'],
    },
    {
      id: 116,
      year: 2017,
      title: 'Space-type radiation induces multimodal responses in the mouse gut microbiome and metabolome',
      authors: 'Casero D, Gill K, Sridharan V, Koturbash I, Nelson G, Hauer-Jensen M, Boerma M, Braun J, Cheema AK.',
      journal: 'Microbiome',
      doi: '10.1186/s40168-017-0325-z',
      tags: ['Radiation', 'Space'],
    },
    {
      id: 117,
      year: 2017,
      title: 'One-carbon metabolism and ionizing radiation: a multifaceted interaction',
      authors: 'Miousse IR, Tobacyk J, Melnyk S, James SJ, Cheema AK, Boerma M, Hauer-Jensen M, Koturbash I.',
      journal: 'Biomol Concepts',
      doi: '10.1515/bmc-2017-0003',
      tags: ['Radiation'],
    },
    {
      id: 118,
      year: 2017,
      title: 'Biomarker validation: Methods and matrix matter',
      authors: 'Mapstone M, Cheema AK, Zhong X, Fiandaca MS, Federoff HJ.',
      journal: 'Alzheimers Dement',
      doi: '10.1016/j.jalz.2016.11.004',
      tags: ['Neurodegenerative', 'Biomarkers'],
    },
    {
      id: 119,
      year: 2017,
      title: 'What success can teach us about failure: the plasma metabolome of older adults with superior memory and lessons for Alzheimer\'s disease',
      authors: 'Mapstone M, Lin F, Nalls MA, Cheema AK, Singleton AB, Fiandaca MS, Federoff HJ.',
      journal: 'Neurobiol Aging',
      doi: '10.1016/j.neurobiolaging.2016.11.007',
      tags: ['Neurodegenerative'],
    },
    {
      id: 120,
      year: 2017,
      title: 'Menthol Smokers: Metabolomic Profiling and Smoking Behavior',
      authors: 'Hsu PC, Lan RS, Brasky TM, Marian C, Cheema AK, Ressom HW, Loffredo CA, Pickworth WB, Shields PG.',
      journal: 'Cancer Epidemiol Biomarkers Prev',
      doi: '10.1158/1055-9965.EPI-16-0124',
      tags: ['Metabolomics', 'Cancer', 'Biomarkers'],
    },
    {
      id: 121,
      year: 2017,
      title: 'Metabolomic applications in radiation biodosimetry: exploring radiation effects through small molecules',
      authors: 'Pannkuk EL, Fornace AJ Jr, Laiakis EC.',
      journal: 'Int J Radiat Biol',
      doi: '10.1080/09553002.2016.1269218',
      tags: ['Radiation', 'Metabolomics', 'Biodosimetry'],
    },
    {
      id: 122,
      year: 2017,
      title: 'Lipidomic Signatures of Nonhuman Primates with Radiation-Induced Hematopoietic Syndrome',
      authors: 'Pannkuk EL, Laiakis EC, Singh VK, Fornace AJ.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-017-10299-w',
      tags: ['Radiation', 'Biomarkers'],
    },
    {
      id: 123,
      year: 2017,
      title: 'A Serum Small Molecule Biosignature of Radiation Exposure from Total Body Irradiated Patients',
      authors: 'Laiakis EC, Pannkuk EL, Chauthe SK, Wang YW, Lian M, Mak TD, Barker CA, Astarita G, Fornace AJ Jr.',
      journal: 'J Proteome Res',
      doi: '10.1021/acs.jproteome.7b00468',
      tags: ['Radiation', 'Biomarkers'],
    },
    {
      id: 124,
      year: 2017,
      title: 'Metabolic Dysregulation after Neutron Exposures Expected from an Improvised Nuclear Device',
      authors: 'Laiakis EC, Wang YW, Young EF, Harken AD, Xu Y, Smilenov L, Garty GY, Brenner DJ, Fornace AJ Jr.',
      journal: 'Radiat Res',
      doi: '10.1667/RR14656.1',
      tags: ['Radiation'],
    },
    {
      id: 125,
      year: 2017,
      title: 'Gas Chromatography/Mass Spectrometry Metabolomics of Urine and Serum from Nonhuman Primates Exposed to Ionizing Radiation: Impacts on the Tricarboxylic Acid Cycle and Protein Metabolism',
      authors: 'Pannkuk EL, Laiakis EC, Authier S, Wong K, Fornace AJ Jr.',
      journal: 'J Proteome Res',
      doi: '10.1021/acs.jproteome.7b00064',
      tags: ['Radiation', 'Metabolomics', 'Proteomics'],
    },
    {
      id: 126,
      year: 2016,
      title: 'Metabolomic profiling of breast tumors using ductal fluid',
      authors: 'Matos Do Canto L, Marian C, Varghese RS, Ahn J, Da Cunha PA, Willey S, Sidawy M, Rone JD, Cheema AK, Luta G, Nezami Ranjbar MR, Ressom HW, Haddad BR.',
      journal: 'Int J Oncol',
      doi: '10.3892/ijo.2016.3732',
      tags: ['Metabolomics', 'Cancer'],
    },
    {
      id: 127,
      year: 2016,
      title: 'Effects of ionizing radiation on the heart',
      authors: 'Boerma M, Sridharan V, Mao XW, Nelson GA, Cheema AK, Koturbash I, Singh SP, Tackett AJ, Hauer-Jensen M.',
      journal: 'Mutat Res Rev Mutat Res',
      doi: '10.1016/j.mrrev.2016.07.003',
      tags: ['Radiation', 'Cardiovascular'],
    },
    {
      id: 128,
      year: 2016,
      title: 'Correction: Discovery of Metabolic Biomarkers for Duchenne Muscular Dystrophy within a Natural History Study',
      authors: 'Boca SM, Nishida M, Harris M, Rao S, Cheema AK, Gill K, Wang D, An L, Gauba R, Seol H, Morgenroth LP, Henricson E, McDonald C, Mah JK, Clemens PR, Hoffman EP, Hathout Y, Madhavan S.',
      journal: 'PLoS One',
      doi: '10.1371/journal.pone.0159895',
      tags: ['Biomarkers'],
    },
    {
      id: 129,
      year: 2016,
      title: 'Discovery of Metabolic Biomarkers for Duchenne Muscular Dystrophy within a Natural History Study',
      authors: 'Boca SM, Nishida M, Harris M, Rao S, Cheema AK, Gill K, Seol H, Morgenroth LP, Henricson E, McDonald C, Mah JK, Clemens PR, Hoffman EP, Hathout Y, Madhavan S.',
      journal: 'PLoS One',
      doi: '10.1371/journal.pone.0153461',
      tags: ['Biomarkers'],
    },
    {
      id: 130,
      year: 2016,
      title: 'Chemopreventive Metabolites Are Correlated with a Change in Intestinal Microbiota Measured in A-T Mice and Decreased Carcinogenesis',
      authors: 'Cheema AK, Maier I, Dowdy T, Wang Y, Singh R, Ruegger PM, Borneman J, Fornace AJ Jr, Schiestl RH.',
      journal: 'PLoS One',
      doi: '10.1371/journal.pone.0151190',
      tags: ['Metabolomics'],
    },
    {
      id: 131,
      year: 2016,
      title: 'Enabling Metabolomics Based Biomarker Discovery Studies Using Molecular Phenotyping of Exosome-Like Vesicles',
      authors: 'Altadill T, Campoy I, Lanau L, Gill K, Rigau M, Gil-Moreno A, Reventos J, Byers S, Colas E, Cheema AK.',
      journal: 'PLoS One',
      doi: '10.1371/journal.pone.0151339',
      tags: ['Metabolomics', 'Biomarkers'],
    },
    {
      id: 132,
      year: 2016,
      title: 'Identification of novel cell survival regulation in diabetic embryopathy via phospholipidomic profiling',
      authors: 'Cao L, Liu P, Gill K, Reece EA, Cheema AK, Zhao Z.',
      journal: 'Biochem Biophys Res Commun',
      doi: '10.1016/j.bbrc.2016.01.098',
      tags: ['Research'],
    },
    {
      id: 133,
      year: 2016,
      title: 'Radiation Metabolomics: Current Status and Future Directions',
      authors: 'Menon SS, Uppal M, Randhawa S, Cheema MS, Aghdam N, Usala RL, Ghosh SP, Cheema AK, Dritschilo A.',
      journal: 'Front Oncol',
      doi: '10.3389/fonc.2016.00020',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 134,
      year: 2016,
      title: 'Assessment of Saliva as a Potential Biofluid for Biodosimetry: A Pilot Metabolomics Study in Mice',
      authors: 'Laiakis EC, Strawn SJ, Brenner DJ, Fornace AJ Jr.',
      journal: 'Radiat Res',
      doi: '10.1667/RR14433.1',
      tags: ['Radiation', 'Metabolomics', 'Biodosimetry'],
    },
    {
      id: 135,
      year: 2016,
      title: 'Implications of genotypic differences in the generation of a urinary metabolomics radiation signature',
      authors: 'Laiakis EC, Pannkuk EL, Diaz-Rubio ME, Wang YW, Mak TD, Simbulan-Rosenthal CM, Brenner DJ, Fornace AJ Jr.',
      journal: 'Mutat Res',
      doi: '10.1016/j.mrfmmm.2016.03.003',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 136,
      year: 2016,
      title: 'A Lipidomic and Metabolomic Serum Signature from Nonhuman Primates Exposed to Ionizing Radiation',
      authors: 'Pannkuk EL, Laiakis EC, Mak TD, Astarita G, Authier S, Wong K, Fornace AJ Jr.',
      journal: 'Metabolomics',
      doi: '10.1007/s11306-016-1010-0',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 137,
      year: 2016,
      title: 'Rapid and High-Throughput Detection and Quantitation of Radiation Biomarkers in Human and Nonhuman Primates by Differential Mobility Spectrometry-Mass Spectrometry',
      authors: 'Chen Z, Coy SL, Pannkuk EL, Laiakis EC, Hall AB, Fornace AJ Jr, Vouros P.',
      journal: 'J Am Soc Mass Spectrom',
      doi: '10.1007/s13361-016-1438-5',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 138,
      year: 2016,
      title: 'Targeted Metabolomics of Nonhuman Primate Serum after Exposure to Ionizing Radiation: Potential Tools for High-throughput Biodosimetry',
      authors: 'Pannkuk EL, Laiakis EC, Authier S, Wong K, Fornace AJ Jr.',
      journal: 'RSC Adv',
      doi: '10.1039/C6RA07757A',
      tags: ['Radiation', 'Metabolomics', 'Biodosimetry'],
    },
    {
      id: 139,
      year: 2016,
      title: 'An Integrated Multi-Omic Approach to Assess Radiation Injury on the Host-Microbiome Axis',
      authors: 'Goudarzi M, Mak TD, Jacobs JP, Moon BH, Strawn SJ, Braun J, Brenner DJ, Fornace AJ Jr, Li HH.',
      journal: 'Radiat Res',
      doi: '10.1667/RR14306.1',
      tags: ['Radiation'],
    },
    {
      id: 140,
      year: 2016,
      title: 'Quantitative Metabolomic Analysis of Urinary Citrulline and Calcitroic Acid in Mice after Exposure to Various Types of Ionizing Radiation',
      authors: 'Goudarzi M, Chauthe S, Strawn SJ, Weber WM, Brenner DJ, Fornace AJ.',
      journal: 'Int J Mol Sci',
      doi: '10.3390/ijms17050782',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 141,
      year: 2015,
      title: 'Plasma 24-metabolite Panel Predicts Preclinical Transition to Clinical Stages of Alzheimer\'s Disease',
      authors: 'Fiandaca MS, Zhong X, Cheema AK, Orquiza MH, Chidambaram S, Tan MT, Gresenz CR, FitzGerald KT, Nalls MA, Singleton AB, Mapstone M, Federoff HJ.',
      journal: 'Front Neurol',
      doi: '10.3389/fneur.2015.00237',
      tags: ['Metabolomics', 'Neurodegenerative'],
    },
    {
      id: 142,
      year: 2015,
      title: 'The ABRF Metabolomics Research Group 2013 Study: Investigation of Spiked Compound Differences in a Human Plasma Matrix',
      authors: 'Cheema AK, Asara JM, Wang Y, Neubert TA, Tolstikov V, Turck CW.',
      journal: 'J Biomol Tech',
      doi: '10.7171/jbt.15-2603-001',
      tags: ['Metabolomics'],
    },
    {
      id: 143,
      year: 2015,
      title: 'Critical periods after stroke study: translating animal stroke recovery experiments into a clinical trial',
      authors: 'Dromerick AW, Edwardson MA, Edwards DF, Giannetti ML, Barth J, Brady KP, Chan E, Tan MT, Tamboli I, Chia R, Orquiza M, Padilla RM, Cheema AK, Mapstone ME, Fiandaca MS, Federoff HJ, Newport EL.',
      journal: 'Front Hum Neurosci',
      doi: '10.3389/fnhum.2015.00231',
      tags: ['Research'],
    },
    {
      id: 144,
      year: 2015,
      title: 'Preclinical studies of the potent and selective nicotinic α4β2 receptor ligand VMY-2-95',
      authors: 'Kong H, Song JK, Yenugonda VM, Zhang L, Shuo T, Cheema AK, Kong Y, Du GH, Brown ML.',
      journal: 'Mol Pharm',
      doi: '10.1021/mp5003569',
      tags: ['Research'],
    },
    {
      id: 145,
      year: 2015,
      title: 'Modulation of Radiation Response by the Tetrahydrobiopterin Pathway',
      authors: 'Pathak R, Cheema AK, Boca SM, Krager KJ, Hauer-Jensen M, Aykin-Burns N.',
      journal: 'Antioxidants (Basel)',
      doi: '10.3390/antiox4010068',
      tags: ['Radiation'],
    },
    {
      id: 146,
      year: 2015,
      title: 'Genetic Associations of PPARGC1A with Type 2 Diabetes: Differences among Populations with African Origins',
      authors: 'Cheema AK, Li T, Liuzzi JP, Zarini GG, Dorak MT, Huffman FG.',
      journal: 'J Diabetes Res',
      doi: '10.1155/2015/921274',
      tags: ['Research'],
    },
    {
      id: 147,
      year: 2015,
      title: 'Global Metabolomic Identification of Long-Term Dose-Dependent Urinary Biomarkers in Nonhuman Primates Exposed to Ionizing Radiation',
      authors: 'Pannkuk EL, Laiakis EC, Authier S, Wong K, Fornace AJ Jr.',
      journal: 'Radiat Res',
      doi: '10.1667/rr14091.1',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 148,
      year: 2015,
      title: 'Distinct serum metabolomics profiles associated with malignant progression in the KrasG12D mouse model of pancreatic ductal adenocarcinoma',
      authors: 'LaConti JJ, Laiakis EC, Mays AD, Peran I, Kim SE, Shay JW, Riegel AT, Fornace AJ Jr, Wellstein A.',
      journal: 'BMC Genomics',
      doi: '10.1186/1471-2164-16-S1-S1',
      tags: ['Metabolomics', 'Cancer'],
    },
    {
      id: 149,
      year: 2015,
      title: 'Metabolomic profiling of urine samples from mice exposed to protons reveals radiation quality and dose specific differences',
      authors: 'Laiakis EC, Trani D, Moon BH, Strawn SJ, Fornace AJ Jr.',
      journal: 'Radiat Res',
      doi: '10.1667/RR3967.1',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 150,
      year: 2015,
      title: 'Selective paired ion contrast analysis: a novel algorithm for analyzing postprocessed LC-MS metabolomics data possessing high experimental noise',
      authors: 'Mak TD, Laiakis EC, Goudarzi M, Fornace AJ Jr.',
      journal: 'Anal Chem',
      doi: '10.1021/ac504012a',
      tags: ['Metabolomics'],
    },
    {
      id: 151,
      year: 2015,
      title: 'A Comprehensive Metabolomic Investigation in Urine of Mice Exposed to Strontium-90',
      authors: 'Goudarzi M, Weber WM, Mak TD, Chung J, Doyle-Eisele M, Melo DR, Strawn SJ, Brenner DJ, Guilmette RA, Fornace AJ Jr.',
      journal: 'Radiat Res',
      doi: '10.1667/RR14011.1',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 152,
      year: 2015,
      title: 'Metabolomic and lipidomic analysis of serum from mice exposed to an internal emitter, cesium-137, using a shotgun LC-MS(E) approach',
      authors: 'Goudarzi M, Weber WM, Mak TD, Chung J, Doyle-Eisele M, Melo DR, Brenner DJ, Guilmette RA, Fornace AJ Jr.',
      journal: 'J Proteome Res',
      doi: '10.1021/pr500913n',
      tags: ['Metabolomics'],
    },
    {
      id: 153,
      year: 2014,
      title: 'Ethnic Differences in Insulin Resistance, Adiponectin Levels and Abdominal Obesity: Haitian Americans and African Americans, with and without Type 2 Diabetes Mellitus',
      authors: 'Cheema AK, Zarini GG, Exebio J, Ajabshir S, Shaban L, Antwi J, Vaccaro JA, Huffman FG.',
      journal: 'Br J Med Med Res',
      doi: '10.9734/bjmmr/2014/10333',
      tags: ['Research'],
    },
    {
      id: 154,
      year: 2014,
      title: 'Liver metabolomics reveals increased oxidative stress and fibrogenic potential in gfrp transgenic mice in response to ionizing radiation',
      authors: 'Cheema AK, Pathak R, Zandkarimi F, Kaur P, Alkhalil L, Singh R, Zhong X, Ghosh S, Aykin-Burns N, Hauer-Jensen M.',
      journal: 'J Proteome Res',
      doi: '10.1021/pr500278t',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 155,
      year: 2014,
      title: 'The critical need for defining preclinical biomarkers in Alzheimer\'s disease',
      authors: 'Fiandaca MS, Mapstone ME, Cheema AK, Federoff HJ.',
      journal: 'Alzheimers Dement',
      doi: '10.1016/j.jalz.2014.04.015',
      tags: ['Neurodegenerative', 'Biomarkers'],
    },
    {
      id: 156,
      year: 2014,
      title: 'Plasma phospholipids identify antecedent memory impairment in older adults',
      authors: 'Mapstone M, Cheema AK, Fiandaca MS, Zhong X, Mhyre TR, MacArthur LH, Hall WJ, Fisher SG, Peterson DR, Haley JM, Nazar MD, Rich SA, Berlau DJ, Peltz CB, Tan MT, Kawas CH, Federoff HJ.',
      journal: 'Nat Med',
      doi: '10.1038/nm.3466',
      tags: ['Research'],
    },
    {
      id: 157,
      year: 2014,
      title: 'Characterization of transgenic Gfrp knock-in mice: implications for tetrahydrobiopterin in modulation of normal tissue radiation responses',
      authors: 'Pathak R, Pawar SA, Fu Q, Gupta PK, Berbée M, Garg S, Sridharan V, Wang W, Biju PG, Krager KJ, Boerma M, Ghosh SP, Cheema AK, Hendrickson HP, Aykin-Burns N, Hauer-Jensen M.',
      journal: 'Antioxid Redox Signal',
      doi: '10.1089/ars.2012.5025',
      tags: ['Radiation'],
    },
    {
      id: 158,
      year: 2014,
      title: 'Long-term differential changes in mouse intestinal metabolomics after γ and heavy ion radiation exposure',
      authors: 'Cheema AK, Suman S, Kaur P, Singh R, Fornace AJ Jr, Datta K.',
      journal: 'PLoS One',
      doi: '10.1371/journal.pone.0087079',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 159,
      year: 2014,
      title: 'Metabolic phenotyping reveals a lipid mediator response to ionizing radiation',
      authors: 'Laiakis EC, Strassburg K, Bogumil R, Lai S, Vreeken RJ, Hankemeier T, Langridge J, Plumb RS, Fornace AJ Jr, Astarita G.',
      journal: 'J Proteome Res',
      doi: '10.1021/pr5005295',
      tags: ['Radiation'],
    },
    {
      id: 160,
      year: 2014,
      title: 'MetaboLyzer: a novel statistical workflow for analyzing Postprocessed LC-MS metabolomics data',
      authors: 'Mak TD, Laiakis EC, Goudarzi M, Fornace AJ Jr.',
      journal: 'Anal Chem',
      doi: '10.1021/ac402477z',
      tags: ['Metabolomics'],
    },
    {
      id: 161,
      year: 2014,
      title: 'Development of a metabolomic radiation signature in urine from patients undergoing total body irradiation',
      authors: 'Laiakis EC, Mak TD, Anizan S, Amundson SA, Barker CA, Wolden SL, Brenner DJ, Fornace AJ Jr.',
      journal: 'Radiat Res',
      doi: '10.1667/RR13567.1',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 162,
      year: 2014,
      title: 'The effect of low dose rate on metabolomic response to radiation in mice',
      authors: 'Goudarzi M, Mak TD, Chen C, Smilenov LB, Brenner DJ, Fornace AJ.',
      journal: 'Radiat Environ Biophys',
      doi: '10.1007/s00411-014-0558-1',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 163,
      year: 2014,
      title: 'Development of urinary biomarkers for internal exposure by cesium-137 using a metabolomics approach in mice',
      authors: 'Goudarzi M, Weber W, Mak TD, Chung J, Doyle-Eisele M, Melo D, Brenner DJ, Guilmette RA, Fornace AJ.',
      journal: 'Radiat Res',
      doi: '10.1667/RR13479.1',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 164,
      year: 2013,
      title: 'Genome-wide multi-omics profiling of colorectal cancer identifies immune determinants strongly associated with relapse',
      authors: 'Madhavan S, Gusev Y, Natarajan TG, Song L, Bhuvaneshwar K, Gauba R, Pandey A, Haddad BR, Goerlitz D, Cheema AK, Juhl H, Kallakury B, Marshall JL, Byers SW, Weiner LM.',
      journal: 'Front Genet',
      doi: '10.3389/fgene.2013.00236',
      tags: ['Immunology', 'Cancer'],
    },
    {
      id: 165,
      year: 2013,
      title: 'Functional proteomics analysis to study ATM dependent signaling in response to ionizing radiation',
      authors: 'Cheema AK, Varghese RS, Timofeeva O, Zhang L, Kirilyuk A, Zandkarimi F, Kaur P, Ressom HW, Jung M, Dritschilo A.',
      journal: 'Radiat Res',
      doi: '10.1667/RR3198.1',
      tags: ['Radiation', 'Proteomics'],
    },
    {
      id: 166,
      year: 2013,
      title: 'Metabolomic changes in gastrointestinal tissues after whole body radiation in a murine model',
      authors: 'Ghosh SP, Singh R, Chakraborty K, Kulkarni S, Uppal A, Luo Y, Kaur P, Pathak R, Kumar KS, Hauer-Jensen M, Cheema AK.',
      journal: 'Mol Biosyst',
      doi: '10.1039/c3mb25454b',
      tags: ['Radiation', 'Metabolomics'],
    },
    {
      id: 167,
      year: 2013,
      title: 'Quantitative metabolomic and lipidomic profiling reveals aberrant amino acid metabolism in type 2 diabetes',
      authors: 'Kaur P, Rizk N, Ibrahim S, Luo Y, Younes N, Perry B, Dennis K, Zirie M, Luta G, Cheema AK.',
      journal: 'Mol Biosyst',
      doi: '10.1039/c2mb25384d',
      tags: ['Metabolomics'],
    },
    {
      id: 168,
      year: 2013,
      title: 'Feasibility of identifying the tobacco-related global metabolome in blood by UPLC-QTOF-MS',
      authors: 'Hsu PC, Zhou B, Zhao Y, Ressom HW, Cheema AK, Pickworth W, Shields PG.',
      journal: 'J Proteome Res',
      doi: '10.1021/pr3007705',
      tags: ['Research'],
    },
    {
      id: 169,
      year: 2013,
      title: 'STAT3 suppresses transcription of proapoptotic genes in cancer cells with the involvement of its N-terminal domain',
      authors: 'Timofeeva OA, Tarasova NI, Zhang X, Chasovskikh S, Cheema AK, Wang H, Brown ML, Dritschilo A.',
      journal: 'Proc Natl Acad Sci U S A',
      doi: '10.1073/pnas.1211805110',
      tags: ['Cancer'],
    },
    {
      id: 170,
      year: 2012,
      title: 'LC-MS based serum metabolomics for identification of hepatocellular carcinoma biomarkers in Egyptian cohort',
      authors: 'Xiao JF, Varghese RS, Zhou B, Nezami Ranjbar MR, Zhao Y, Tsai TH, Di Poto C, Wang J, Goerlitz D, Luo Y, Cheema AK, Sarhan N, Soliman H, Tadesse MG, Ziada DH, Ressom HW.',
      journal: 'J Proteome Res',
      doi: '10.1021/pr300673x',
      tags: ['Metabolomics', 'Biomarkers'],
    },
    {
      id: 171,
      year: 2012,
      title: 'Metabolomics of human intestinal transplant rejection',
      authors: 'Girlanda R, Cheema AK, Kaur P, Kwon Y, Li A, Guerra J, Matsumoto CS, Zasloff M, Fishbein TM.',
      journal: 'Am J Transplant',
      doi: '10.1111/j.1600-6143.2012.04183.x',
      tags: ['Metabolomics'],
    },
    {
      id: 172,
      year: 2012,
      title: 'iTRAQ-based quantitative protein expression profiling and MRM verification of markers in type 2 diabetes',
      authors: 'Kaur P, Rizk NM, Ibrahim S, Younes N, Uppal A, Dennis K, Karve T, Blakeslee K, Kwagyan J, Zirie M, Ressom HW, Cheema AK.',
      journal: 'J Proteome Res',
      doi: '10.1021/pr300798z',
      tags: ['Proteomics'],
    },
    {
      id: 173,
      year: 2012,
      title: 'Utilization of metabolomics to identify serum biomarkers for hepatocellular carcinoma in patients with liver cirrhosis',
      authors: 'Ressom HW, Xiao JF, Tuli L, Varghese RS, Zhou B, Tsai TH, Ranjbar MR, Zhao Y, Wang J, Di Poto C, Cheema AK, Tadesse MG, Goldman R, Shetty K.',
      journal: 'Anal Chim Acta',
      doi: '10.1016/j.aca.2012.07.013',
      tags: ['Metabolomics', 'Biomarkers'],
    },
    {
      id: 174,
      year: 2012,
      title: 'Comparison of mouse urinary metabolic profiles after exposure to the inflammatory stressors γ radiation and lipopolysaccharide',
      authors: 'Laiakis EC, Hyduke DR, Fornace AJ.',
      journal: 'Radiat Res',
      doi: '10.1667/rr2771.1',
      tags: ['Radiation'],
    },
    {
      id: 175,
      year: 2011,
      title: 'A new method for alignment of LC-MALDI-TOF data',
      authors: 'Tang Z, Zhang L, Cheema AK, Ressom HW.',
      journal: 'Proteome Sci',
      doi: '10.1186/1477-5956-9-S1-S10',
      tags: ['Research'],
    },
    {
      id: 176,
      year: 2011,
      title: 'Radiation metabolomics and its potential in biodosimetry',
      authors: 'Coy SL, Cheema AK, Tyburski JB, Laiakis EC, Collins SP, Fornace A Jr.',
      journal: 'Int J Radiat Biol',
      doi: '10.3109/09553002.2011.556177',
      tags: ['Radiation', 'Metabolomics', 'Biodosimetry'],
    },
    {
      id: 177,
      year: 2011,
      title: 'Integrated analysis of ATM mediated gene and protein expression impacting cellular metabolism',
      authors: 'Cheema AK, Timofeeva O, Varghese R, Dimtchev A, Shiekh K, Shulaev V, Suy S, Collins S, Ressom H, Jung M, Dritschilo A.',
      journal: 'J Proteome Res',
      doi: '10.1021/pr101243j',
      tags: ['Proteomics'],
    },
    {
      id: 178,
      year: 2011,
      title: 'Small molecule metabolite extraction strategy for improving LC/MS detection of cancer cell metabolome',
      authors: 'Sheikh KD, Khanna S, Byers SW, Fornace A Jr, Cheema AK.',
      journal: 'J Biomol Tech',
      doi: '',
      tags: ['Metabolomics', 'Cancer'],
    },
    {
      id: 179,
      year: 2011,
      title: 'Biomarkers in the age of omics: time for a systems biology approach',
      authors: 'Abu-Asab MS, Chaouchi M, Alesci S, Galli S, Laassri M, Cheema AK, Atouf F, VanMeter J, Amri H.',
      journal: 'OMICS',
      doi: '10.1089/omi.2010.0023',
      tags: ['Biomarkers'],
    },
    {
      id: 180,
      year: 2011,
      title: 'Small changes huge impact: the role of protein posttranslational modifications in cellular homeostasis and disease',
      authors: 'Karve TM, Cheema AK.',
      journal: 'J Amino Acids',
      doi: '10.4061/2011/207691',
      tags: ['Proteomics'],
    },
    {
      id: 181,
      year: 2011,
      title: 'Human fibroblasts for large-scale "omics" investigations of ATM gene function',
      authors: 'Jung M, Timofeeva O, Cheema AK, Varghese R, Ressom H, Dritschilo A.',
      journal: 'Adv Exp Med Biol',
      doi: '10.1007/978-1-4614-0254-1_15',
      tags: ['Research'],
    },
    {
      id: 182,
      year: 2011,
      title: 'Identification of urinary biomarkers from X-irradiated mice using NMR spectroscopy',
      authors: 'Chen C, Brenner DJ, Brown TR.',
      journal: 'Radiat Res',
      doi: '10.1667/RR2388.1',
      tags: ['Radiation', 'Biomarkers'],
    },
    {
      id: 183,
      year: 2010,
      title: 'SVM-based spectral matching for metabolite identification',
      authors: 'Zhou B, Cheema AK, Ressom HW.',
      journal: 'Annu Int Conf IEEE Eng Med Biol Soc',
      doi: '10.1109/IEMBS.2010.5626337',
      tags: ['Metabolomics'],
    },
    {
      id: 184,
      year: 2010,
      title: 'Metabolomic analysis in severe childhood pneumonia in the Gambia, West Africa: findings from a pilot study',
      authors: 'Laiakis EC, Morris GA, Fornace AJ, Howie SR.',
      journal: 'PLoS One',
      doi: '10.1371/journal.pone.0012655',
      tags: ['Metabolomics'],
    },
    {
      id: 185,
      year: 2010,
      title: 'Detection of Radiation-Exposure Biomarkers by Differential Mobility Prefiltered Mass Spectrometry (DMS-MS)',
      authors: 'Coy SL, Krylov EV, Schneider BB, Covey TR, Brenner DJ, Tyburski JB, Patterson AD, Krausz KW, Fornace AJ, Nazarov EG.',
      journal: 'Int J Mass Spectrom',
      doi: '10.1016/j.ijms.2010.01.013',
      tags: ['Radiation', 'Metabolomics', 'Biomarkers'],
    },
    {
      id: 186,
      year: 2008,
      title: 'Detection of the acrolein-derived cyclic DNA adduct by a quantitative 32P-postlabeling/solid-phase extraction/HPLC method: blocking its artifact formation with glutathione',
      authors: 'Emami A, Dyba M, Cheema AK, Pan J, Nath RG, Chung FL.',
      journal: 'Anal Biochem',
      doi: '10.1016/j.ab.2007.10.029',
      tags: ['Research'],
    },
    {
      id: 187,
      year: 2008,
      title: 'Protein carbonylation as a novel mechanism in redox signaling',
      authors: 'Wong CM, Cheema AK, Zhang L, Suzuki YJ.',
      journal: 'Circ Res',
      doi: '10.1161/CIRCRESAHA.107.159814',
      tags: ['Proteomics'],
    },
    {
      id: 188,
      year: 2007,
      title: 'Genomewide clonal analysis of lethal mutations in the Drosophila melanogaster eye: comparison of the X chromosome and autosomes',
      authors: 'Call GB, Olson JM, Chen J, Villarasa N, Ngo KT, Yabroff AM, Cokus S, Pellegrini M, Bibikova E, Bui C, Cespedes A, Chan C, Chan S, Cheema AK, Chhabra A, Chitsazzadeh V, Do MT, Fang QA, Folick A, Goodstein GL, Huang CR, Hung T, Kim E, Kim W, Kim Y, Kohan E, Kuoy E, Kwak R, Lee E, Lee J, Lin H, Liu HC, Moroz T, Prasad T, Prashad SL, Patananan AN, Rangel A, Rosselli D, Sidhu S, Sitz D, Taber CE, Tan J, Topp K, Tran P, Tran QM, Unkovic M, Wells M, Wickland J, Yackle K, Yavari A, Zaretsky JM, Allen CM, Alli L, An J, Anwar A, Arevalo S, Ayoub D, Badal SS, Baghdanian A, Baghdanian AH, Baumann SA, Becerra VN, Chan HJ, Chang AE, Cheng XA, Chin M, Chong F, Crisostomo C, Datta S, Delosreyes A, Diep F, Ekanayake P, Engeln M, Evers E, Farshidi F, Fischer K, Formanes AJ, Gong J, Gupta R, Haas BE, Hahm V, Hsieh M, Hui JZ, Iao ML, Jin SD, Kim AY, Kim LS, King M, Knudsen-Robbins C, Kohanchi D, Kovshilovskaya B, Ku A, Kung RW, Landig ME, Latterman SS, Lauw SS, Lee DS, Lee JS, Lei KC, Leung LL, et al.',
      journal: 'Genetics',
      doi: '10.1534/genetics.107.077735',
      tags: ['Research'],
    },
    {
      id: 189,
      year: 1999,
      title: 'A- and T-tract-mediated intrinsic curvature in native DNA between the binding site of the upstream activator NtrC and the nifLA promoter of Klebsiella pneumoniae facilitates transcription',
      authors: 'Cheema AK, Choudhury NR, Das HK.',
      journal: 'J Bacteriol',
      doi: '10.1128/JB.181.17.5296-5302.1999',
      tags: ['Research'],
    },
    {
      id: 193,
      year: 2025,
      title: 'Proteomic Changes in Preterminal Serum Samples of Rhesus Macaques Exposed to Two Different Doses of Acute Lethal Total-body Gamma Radiation',
      authors: 'Carpenter AD, Melendez-Miranda I, Li Y, Kandhavelu J, Fatanmi OO, Wise SY, Cheema AK, Singh VK.',
      journal: 'Radiat Res',
      doi: '10.1667/RADE-25-00029.1',
      tags: ['Radiation', 'Proteomics'],
    },
    {
      id: 194,
      year: 2023,
      title: 'Diagnostic utility of N-terminal TMPP labels for unambiguous identification of clipped sites in therapeutic proteins',
      authors: 'Gunawardena HP, Jayatilake MM, Brelsford JD, Nanda H.',
      journal: 'Sci Rep',
      doi: '10.1038/s41598-023-45446-z',
      tags: ['Proteomics', 'Biomarkers'],
    },
    {
      id: 195,
      year: 2022,
      title: 'The Microbiome and Metabolomic Profile of the Transplanted Intestine with Long-Term Function',
      authors: 'Girlanda R, Liggett JR, Jayatilake M, Kroemer A, Guerra JF, Hawksworth JS, Radkani P, Matsumoto CS, Zasloff M, Fishbein TM.',
      journal: 'Biomedicines',
      doi: '10.3390/biomedicines10092079',
      tags: ['Metabolomics', 'Microbiome'],
    },
  ]




  const currentYear = new Date().getFullYear()
  const last5Years = Array.from({ length: 5 }, (_, i) => currentYear - i)
  const minYear = Math.min(...last5Years)

  const sortedPublications = [...publications].sort((a, b) => {
    // Newest year first
    if (b.year !== a.year) return b.year - a.year

    // Optional: keep a stable secondary sort by id
    return b.id - a.id
  })

  // Number of publications to show initially
  const [visibleCount, setVisibleCount] = useState(5)

  useEffect(() => {
    setVisibleCount(5)
  }, [searchTerm, selectedYear])

  // Filter publications by search term only (without year filter)
  const searchFilteredPublications = sortedPublications.filter((pub) => {
    const matchesSearch = searchTerm === '' ||
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesSearch
  })

  // Final filtered publications (search + year)
  const filteredPublications = searchFilteredPublications.filter((pub) => {
    const matchesYear = 
      selectedYear === null 
        ? true 
        : selectedYear === 'older' 
        ? pub.year < minYear 
        : pub.year === selectedYear
    return matchesYear
  })

  const displayedPublications = filteredPublications.slice(0, visibleCount)

  // Subtle blue gradient: same hue, decreasing opacity (newest=most opaque, oldest=most transparent)
  // Selected uses sky blue for a slight hue shift
  const yearBarTop = ['bg-blue-500/80', 'bg-blue-500/65', 'bg-blue-500/50', 'bg-blue-500/40', 'bg-blue-500/30']
  const yearBarBot = ['bg-blue-500/65', 'bg-blue-500/50', 'bg-blue-500/40', 'bg-blue-500/30', 'bg-blue-500/20']

  return (
    <div className={isDark ? 'bg-gray-950' : 'bg-white'}>
      {/* Header */}
      <section className={`pt-24 pb-6 md:pb-8 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 to-gray-950' 
          : 'bg-gradient-to-br from-blue-50 to-gray-50'
      }`}>
        <div className="container max-w-7xl mx-auto">
          <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            Peer-Reviewed Research
          </p>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Publications</h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore our research publications spanning metabolomics, cancer biology, and biomarker discovery.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className={`py-6 md:py-8 border-b ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} size={20} />
              <input
                type="text"
                placeholder="Search by title, author, journal, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </div>

          {/* Year Histogram */}
          <div className="flex items-center justify-between mb-0">
            <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Publications by Year</p>
            <button
              onClick={() => setSelectedYear(null)}
              title="Reset filter to show all publications"
              className={`p-2 rounded-lg transition-colors ${
                selectedYear === null
                  ? isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                  : isDark ? 'text-gray-500 hover:text-gray-300 hover:bg-gray-800' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
            >
              <RotateCcw size={18} />
            </button>
          </div>
          <div className="flex items-end justify-between gap-3 h-24">
            {last5Years.map((year, idx) => {
              const count = searchFilteredPublications.filter((p) => p.year === year).length
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                  className={`flex-1 flex flex-col items-center group cursor-pointer rounded-lg transition-all ${
                    selectedYear === year ? 'scale-110' : ''
                  }`}
                  title={`${count} publication${count !== 1 ? 's' : ''} in ${year}`}
                >
                  <div className="flex flex-col items-center w-full mb-1">
                    <div
                      className={`w-full h-2 rounded-t transition-all ${
                        selectedYear === year
                          ? 'bg-sky-500'
                          : yearBarTop[idx]
                      }`}
                    />
                  </div>
                  <span className={`text-xs font-semibold ${
                    selectedYear === year
                      ? isDark ? 'text-sky-300' : 'text-sky-600'
                      : isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {year}
                  </span>
                  <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {count}
                  </span>
                  <div
                    className={`w-full h-2 rounded-b transition-all mt-1 ${
                      selectedYear === year
                        ? 'bg-sky-400'
                        : yearBarBot[idx]
                    }`}
                  />
                  {selectedYear === year && (
                    <div className={`w-1.5 h-1.5 rounded-full mt-1 ${isDark ? 'bg-sky-400' : 'bg-sky-500'}`} />
                  )}
                </button>
              )
            })}
            {/* Older button */}
            {(() => {
              const olderCount = searchFilteredPublications.filter((p) => p.year < minYear).length
              return (
                <button
                  key="older"
                  onClick={() => setSelectedYear(selectedYear === 'older' ? null : 'older')}
                  className={`flex-1 flex flex-col items-center group cursor-pointer rounded-lg transition-all ${
                    selectedYear === 'older' ? 'scale-110' : ''
                  }`}
                  title={`${olderCount} publication${olderCount !== 1 ? 's' : ''} older than ${minYear}`}
                >
                  <div className="flex flex-col items-center w-full mb-1">
                    <div
                      className={`w-full h-2 rounded-t transition-all ${
                        selectedYear === 'older'
                          ? 'bg-sky-500'
                          : 'bg-blue-500/20'
                      }`}
                    />
                  </div>
                  <span className={`text-xs font-semibold ${
                    selectedYear === 'older'
                      ? isDark ? 'text-sky-300' : 'text-sky-600'
                      : isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Older
                  </span>
                  <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {olderCount}
                  </span>
                  <div
                    className={`w-full h-2 rounded-b transition-all mt-1 ${
                      selectedYear === 'older'
                        ? 'bg-sky-400'
                        : 'bg-blue-500/10'
                    }`}
                  />
                  {selectedYear === 'older' && (
                    <div className={`w-1.5 h-1.5 rounded-full mt-1 ${isDark ? 'bg-sky-400' : 'bg-sky-500'}`} />
                  )}
                </button>
              )
            })()}
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className={`py-10 md:py-14 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Research Publications" subtitle="Browse our peer-reviewed publications and research outputs" />
          {filteredPublications.length > 0 ? (
            <div className="space-y-6">
              {displayedPublications.map((pub) => (
                <Card key={pub.id} className={`border-l-4 border-l-blue-600`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-sm font-bold px-2 py-1 rounded ${
                          isDark 
                            ? 'text-blue-400 bg-blue-950' 
                            : 'text-blue-600 bg-blue-100'
                        }`}>
                          {pub.year}
                        </span>
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{pub.title}</h3>
                      <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{pub.authors}</p>
                      <p className={`text-sm italic mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>{pub.journal}</strong>
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.tags.map((tag, idx) => (
                          <span key={idx} className={`text-xs px-2 py-1 rounded-full ${
                            isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                          }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mt-4 md:mt-0 flex-shrink-0 whitespace-nowrap"
                    >
                      View Article <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>No publications found matching your search.</p>
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredPublications.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isDark
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              Load More ({filteredPublications.length - visibleCount} remaining)
            </button>
          </div>
        )}

          <div className="mt-12 text-center">
            <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              View all publications on{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/?term=cheema+ak"
                target="_blank"
                rel="noopener noreferrer"
                className={isDark ? 'text-blue-400 hover:text-blue-300 font-medium' : 'text-blue-600 hover:text-blue-700 font-medium'}
              >
                PubMed
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 md:py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Interested in Our Research?</h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Contact us to discuss collaboration opportunities or request reprints.
          </p>
          <a
            href="/contact"
            className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              isDark ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Get in Touch
          </a>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
