# GitHub Repository Summary (antibloch / algebraicdianuj / superbloch)

**Note:** Main account is "antibloch". Prior usernames: "superdianuj", "antidianuj". Alternative account: "algebraicdianuj".

---

## ML Privacy & Security

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [mia_attacks](https://github.com/superdianuj/mia_attacks) | Membership Inference Attack implementations | PyTorch, scikit-learn | Baseline, Shokri shadow-model, LiRA, RMIA, quantile regression attacks |
| [DC_U](https://github.com/algebraicdianuj/DC_U) | Dataset Condensation for Machine Unlearning | PyTorch, Opacus, ART | Unlearning via condensed data; compares NTK, Fisher, sparsity methods |
| [DC_Unlearning](https://github.com/algebraicdianuj/DC_Unlearning) | Distribution Matching for Approximate Unlearning | PyTorch, Opacus | Blend condensation + Accelerated-AMU; single/multi-round unlearning |
| [ambitious_explorations_privacyattacks](https://github.com/dianujer/ambitious_explorations_privacyattacks) | MIA vs Model Inversion comparison | PyTorch, scikit-learn | Remembrance metric, attention-based attack, GAN inversion |
| [explorations_over_privacyattacks](https://github.com/dianujer/explorations_over_privacyattacks) | Privacy attack experiments | PyTorch, scikit-learn | MIA and inversion attack benchmarks |
| [poisoned_output_detection](https://github.com/dianujer/poisoned_output_detection) | Poisoning detection | PyTorch, NumPy | Statistical detectors for manipulated outputs |
| [data_driven_attack_encryptedmodel](https://github.com/dianujer/data_driven_attack_encryptedmodel) | Attacks on encrypted ML models | PyTorch, Pyfhel | Side-channel and inference-time attacks |
| [entropy_driven_MIA_defenses](https://github.com/dianujer/entropy_driven_MIA_defenses) | Entropy-based MIA defenses | TensorFlow Privacy | Evaluates softmax temperature/noise for MIA mitigation |
| [cache_trace_analysis](https://github.com/dianujer/cache_trace_analysis) | Cache trace side-channel analysis | Jupyter, Python | Input inference from d-cache/i-cache; Kolmogorov testing; 1D/2D classification |
| [machine_unlearning](https://github.com/dianujer/machine_unlearning) | Gradient ascent unlearning | PyTorch | Basic unlearning implementation |
| [faulty_honey_encryption](https://github.com/dianujer/faulty_honey_encryption) | Honey Encryption weaknesses | Python | Fault-based key recovery analysis |
| [simple_adversarial_attack](https://github.com/dianujer/simple_adversarial_attack) | Basic adversarial attacks | PyTorch/TensorFlow | FGSM, PGD implementations |
| [simple_data_poisoning](https://github.com/dianujer/simple_data_poisoning) | Data poisoning demos | scikit-learn, PyTorch | Label flipping, backdoor insertion |
| [literature_secure_inference_edge](https://github.com/dianujer/literature_secure_inference_edge) | Secure edge inference notes | - | MPC, HE, Federated Learning literature |
| [ML_privacy_links](https://github.com/dianujer/ML_privacy_links) | ML privacy resource collection | - | Curated repo links for PPML |

---

## Radar & ECG Signal Processing

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [vital_signs_instrument_project](https://github.com/dianujer/vital_signs_instrument_project) | Non-contact vital signs measurement | C (XMC4700), Python, Flutter | I/Q radar processing, VMD, heart/breathing rate validation |
| [p5_conceptual_simul_of_radar](https://github.com/dianujer/p5_conceptual_simul_of_radar) | Radar visualization | p5.js | Wave propagation and vital-sign detection concepts |
| [HR_BR_Radar_ECG](https://github.com/dianujer/HR_BR_Radar_ECG) | Radar vs ECG accuracy comparison | Python (NumPy, SciPy) | HR/BR validation against ground truth |
| [ECG_HeartRate_Methods](https://github.com/dianujer/ECG_HeartRate_Methods) | ECG heart rate algorithms | Python, WFDB, MATLAB | Pan-Tompkins, Wavelet, FFT methods |
| [ECG_BreathingRate_Methods](https://github.com/dianujer/ECG_BreathingRate_Methods) | ECG breathing rate algorithms | Python, WFDB, MATLAB | Respiratory rate extraction from ECG |
| [ECG_measurement_system](https://github.com/dianujer/ECG_measurement_system) | ECG hardware/software design | C/C++, Python, MATLAB | Signal acquisition and analysis |
| [InfenionSense2Gol_Vital_signs](https://github.com/dianujer/InfenionSense2Gol_Vital_signs) | Sense2Gol radar interface | MATLAB | I/Q data processing, FFT, VMD |

---

## Computer Vision

### 3D Reconstruction & Gaussian Splatting

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [nerf_synthetic_blur](https://github.com/superdianuj/nerf_synthetic_blur) | NeRF + deblurring (synthetic) | PyTorch, NeRF | DeblurGAN, NAFNet integration for blurred scenes |
| [nerf_real_blur](https://github.com/superdianuj/nerf_real_blur) | NeRF + deblurring (real images) | PyTorch, NeRF | Motion blur, low-light handling |
| [gaussian_splt_blur](https://github.com/superdianuj/gaussian_splt_blur) | BAD-Gaussian + deblurring | PyTorch | 3D scene rendering from blurred data |
| [imp_gaussian_splatting](https://github.com/superdianuj/imp_gaussian_splatting) | Enhanced Gaussian Splatting | PyTorch | Denoising, adaptive sampling improvements |
| [improved_SuGaR](https://github.com/superdianuj/improved_SuGaR) | Enhanced SuGaR rendering | PyTorch | Surface-aligned Gaussian Splatting improvements |
| [gaussian_talker_ablation](https://github.com/superdianuj/gaussian_talker_ablation) | Gaussian Splatting audio ablation | PyTorch | Speech generation model studies |
| [gaussian-splatting](https://github.com/antibloch/gaussian-splatting) | Gaussian Splatting experiments | PyTorch | Configuration and dataset experiments |
| [gaussian_heart](https://github.com/antidianuj/gaussian_heart) | Gaussian Splatting demo | PyTorch | Heart-shaped Gaussian rendering |
| [simple_nerf](https://github.com/antidianuj/simple_nerf) | Simplified NeRF comparison | PyTorch | Architecture benchmarking |
| [colmap_installation_directs](https://github.com/antidianuj/colmap_installation_directs) | COLMAP setup guide | - | Structure-from-Motion toolkit installation |

### Image Restoration & Super-Resolution

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [NAFNet](https://github.com/superdianuj/NAFNet) | Nonlinear Activation Free Network | PyTorch, CUDA | State-of-the-art denoising/deblurring |
| [SPSR](https://github.com/superdianuj/SPSR) | Super Pixel-Shuffle SR | PyTorch | Super-resolution algorithm |
| [HI-Diff](https://github.com/superdianuj/HI-Diff) | High-Order Diffusion | PyTorch | Deblurring via diffusion |
| [Diff-PIR](https://github.com/superdianuj/Diff-PIR) | Diffusion-Prior Image Restoration | PyTorch | Deblurring with diffusion prior |
| [DiffBIR](https://github.com/antibloch/DiffBIR) | Diffusion Blind Image Restoration | PyTorch | Blind restoration methods |
| [ESRGAN](https://github.com/superdianuj/ESRGAN) | Super-Resolution GAN | PyTorch | Photo-realistic SR with RRDB |
| [super_resolution](https://github.com/superdianuj/super_resolution) | Classical SR models | PyTorch | SRCNN, Nina-SR implementations |
| [SUPIR](https://github.com/superdianuj/SUPIR) | Scaling-Up Image Restoration | PyTorch | Joint deblurring + super-resolution |
| [siren_exps](https://github.com/antidianuj/siren_exps) | SIREN experiments | PyTorch | Sinusoidal Representation Networks |

### Point Cloud & 3D Segmentation

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [SAM_pointcloud_segment](https://github.com/superdianuj/SAM_pointcloud_segment) | SAM-based 3D segmentation | PyTorch, SAM | 2D projection → SAM → 3D label mapping |
| [infer_pc](https://github.com/antibloch/infer_pc) | Open3D-ML inference | PyTorch, Open3D | PointNet++, RandLA-Net inference |
| [PointCloudSegmentation](https://github.com/antibloch/PointCloudSegmentation) | Pair-wise linkage segmentation | Python | Linkage algorithms for point clouds |
| [ballast_extract_pointprocess](https://github.com/antibloch/ballast_extract_pointprocess) | Rail/ballast detection | Python | LiDAR point processing for railway |
| [pointnet_training_comp](https://github.com/antibloch/pointnet_training_comp) | PointNet training comparison | PyTorch | Training scheme benchmarking |
| [balast_seg](https://github.com/antibloch/balast_seg) | Diffusion-based 3D segmentation | PyTorch | Ballast point cloud segmentation with diffusion models, 2D segementation models, and 3D to 2D to 3D projections |
| [LSK3DNet](https://github.com/antibloch/LSK3DNet) | Large Separable Kernel 3D net | PyTorch | Point cloud segmentation |
| [RandLA-Net-pytorch](https://github.com/antibloch/RandLA-Net-pytorch) | RandLA-Net PyTorch port | PyTorch | Large-scale point cloud segmentation |
| [kprnet](https://github.com/antibloch/kprnet) | Keypoint-based segmentation | PyTorch | KPRNet implementation |
| [mod_kprnet](https://github.com/antibloch/mod_kprnet) | Modified KPRNet | PyTorch | 2D-to-3D mapping variant |
| [SphereFormer](https://github.com/antibloch/SphereFormer) | Spherical transformer | PyTorch | Spherical projection point cloud transformer |
| [LiDAR_Line_Detection](https://github.com/superdianuj/LiDAR_Line_Detection) | Geometric primitive detection | Python | RANSAC/Hough for LiDAR lines/planes |
| [pointnet_segmentation](https://github.com/superdianuj/pointnet_segmentation) | PointNet on S3DIS | PyTorch | Indoor scene segmentation |

### Object Detection & Tracking

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [uniform_color_detect](https://github.com/antibloch/uniform_color_detect) | Shirt color detection | PyTorch | YOLOv11 + Segformer for color identification |
| [yolo_detection_tracking](https://github.com/superdianuj/yolo_detection_tracking) | Object detection + tracking | PyTorch | YOLO with SORT/DeepSORT |
| [PeopleNet_Object_Tracking](https://github.com/superdianuj/PeopleNet_Object_Tracking) | Person tracking | NVIDIA TAO | PeopleNet-based detection/tracking |

### Image Processing & Misc CV

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [MinimaxDiffusion](https://github.com/antibloch/MinimaxDiffusion) | Diffusion-based dataset condensation | PyTorch, Diffusion | Synthetic data generation with minimax optimization |
| [denoising-diffusion-pytorch](https://github.com/antibloch/denoising-diffusion-pytorch) | Denoising diffusion model | PyTorch | DDPM implementation |
| [shopping_site_tryon](https://github.com/superdianuj/shopping_site_tryon) | Virtual try-on | PyTorch | Clothing extraction + diffusion try-on |
| [fisheye2rectangular](https://github.com/superdianuj/fisheye2rectangular) | Fisheye conversion | Python | Fisheye to equirectangular projection |
| [img_histo](https://github.com/superdianuj/img_histo) | Image histograms | Python | Grayscale, RGB, HSV visualization |

### Medical Imaging

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [tumor_classification_segmentation](https://github.com/dianujizer/tumor_classification_segmentation) | Brain tumor analysis | PyTorch | CNN/U-Net for MRI classification/segmentation |
| [experiment_over_unet](https://github.com/dianujizer/experiment_over_unet) | U-Net preprocessing study | PyTorch | Image processing technique evaluation |
| [MRI_condensation](https://github.com/dianujizer/MRI_condensation) | MRI dataset condensation | PyTorch | Condensation applied to medical imaging |
| [Graph_Image_Segment_Implementations](https://github.com/dianujizer/Graph_Image_Segment_Implementations) | Graph-based segmentation | Python | Graph cuts, spectral clustering for MRI |

### Other CV Projects

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [integrated_gradient_spectrogram_Xception](https://github.com/dianujer/integrated_gradient_spectrogram_Xception) | Xception interpretability | PyTorch | Integrated Gradients for spectrogram models |
| [violonist_assistant](https://github.com/dianujer/violonist_assistant) | Violin practice monitor | OpenCV | Bow/finger position tracking |
| [detectron2_image_objectdetection](https://github.com/dianujer/detectron2_image_objectdetection) | Detectron2 training | PyTorch | Custom dataset object detection |
| [image_processing_course_work](https://github.com/dianujer/image_processing_course_work) | Image processing coursework | Python | Filtering, edge detection, morphology |
| [binary_edge_smoother](https://github.com/dianujer/binary_edge_smoother) | Binary edge smoothing | Python | Edge smoothing algorithms |
| [urban_sound_alexent_architecture_classification](https://github.com/dianujer/urban_sound_alexent_architecture_classification) | Urban sound classification | PyTorch | Spectrogram CNN classification |
| [mnist_denoising_autoencoder](https://github.com/dianujer/mnist_denoising_autoencoder) | MNIST denoising | PyTorch | Autoencoder for noise removal |

---

## Natural Language Processing

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [donor_readiness](https://github.com/antibloch/donor_readiness) | Donor readiness prediction | PyTorch, scikit-learn, XGBoost | Time-series feature engineering; LSTM, Transformer, XGBoost classifiers |
| [donor_readiness_scorer](https://github.com/antibloch/donor_readiness_scorer) | Donor scoring Streamlit app | Streamlit, ONNX Runtime | ONNX inference UI for donation probability |
| [donor_agent](https://github.com/antibloch/donor_agent) | Donor assistance agent | LangGraph, FastAPI, NVIDIA NIM | Multi-node pipeline: planner → validator → executor → gate → responder |
| [ai_agent](https://github.com/antibloch/ai_agent) | LLM agent patterns | LangGraph, LangChain, MCP | ReAct, Tree-of-Thought, Reflexion, planner-validator-executor patterns |
| [doc_qa_project](https://github.com/antibloch/doc_qa_project) | LLM agent patterns | LangChain, FAISS, NVIDIA-NIM, Flask | RAG |
| [llm_finetuning](https://github.com/antibloch/llm_finetuning) | LLM fine-tuning scripts | PyTorch, TRL, Unsloth, Axolotl | Full-parameter and LoRA fine-tuning (Llama, etc.) |
| [ml_reviewer](https://github.com/antibloch/ml_reviewer) | ML literature agent | Python, OpenAI, HF | Paper search/summarization with SmolAgents |
| [text_signal_classification](https://github.com/superdianuj/text_signal_classification) | Signal-based text classification | TensorFlow, Librosa | Fourier-domain text representation; WaveNet, Conv1D for cyberbully detection |
| [text_summarization](https://github.com/dianujer/text_summarization) | Text summarization | PyTorch | Extractive and abstractive (BART, T5) |
| [toxity_ranker](https://github.com/dianujer/toxity_ranker) | Toxicity ranking | PyTorch | Jigsaw-trained toxicity models |
| [Bert_sentiment_classification](https://github.com/dianujer/Bert_sentiment_classification) | Sentiment analysis | PyTorch | BERT/RoBERTa fine-tuning |
| [Gingerit_Plagarism_Remover](https://github.com/dianujer/Gingerit_Plagarism_Remover) | Text rewriting | Python | Gingerit wrapper for paraphrasing |
| [BERT_CoLA](https://github.com/dianujer/BERT_CoLA) | Grammatical acceptability | PyTorch | BERT on CoLA dataset |
| [Text_Modelling_NMF_Text_Classification_RNN](https://github.com/dianujer/Text_Modelling_NMF_Text_Classification_RNN) | Sentence modeling | PyTorch | NMF and RNN for text classification |
| [journal_finder](https://github.com/dianujer/journal_finder) | Journal recommendation | Python | BibTeX keyword-based journal matching |

---

## Chemical & Brain Analysis

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [protein_sequence_classification](https://github.com/dianujer/protein_sequence_classification) | PPI classification | PyTorch | LSTM/CNN on amino-acid sequences |
| [SMILES_classification](https://github.com/dianujizer/SMILES_classification) | Chemical property prediction | PyTorch, RDKit | SMILES string classification |
| [SSA_implementations](https://github.com/dianujer/SSA_implementations) | Neuroimaging analysis | Python | Singular Spectrum Analysis for brain imaging |
| [mne_EEG_visual](https://github.com/dianujer/mne_EEG_visual) | EEG visualization | Python, MNE | MNE-based EEG plotting |
| [Structural_connectivity_network_GAN](https://github.com/dianujer/Structural_connectivity_network_GAN) | Brain connectivity generation | PyTorch | GAN for structural connectivity matrices |

---

## Accelerometer, COVID-19 & Misc ML

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [sparse_learning_novice_pro_accelerometer_classification](https://github.com/dianujer/sparse_learning_novice_pro_accelerometer_classification) | Accelerometer ML | PyTorch, TensorFlow | Sparse learning, compressed sensing, HAR on spectrograms |
| [comparment_model_identification](https://github.com/dianujer/comparment_model_identification) | COVID-19 modeling | Python | SINDy, SIQRD/SEQHIRD/SVEQIHRD models, symptom classification |
| [SMI_amplitude_esim](https://github.com/dianujizer/SMI_amplitude_esim) | Interferometry analysis | PyTorch | Self-Mixing Interferometry displacement estimation |
| [music_genre_cnn_lstm](https://github.com/dianujer/music_genre_cnn_lstm) | Music genre classification | PyTorch | CNN-LSTM on audio spectrograms |

### Misc Projects (single repo)
- **Graph link prediction:** Q-learning vs heuristics
- **Stock trader:** Actor-Critic RL agent
- **Forecasting:** DeepXF, LSTM, Autoencoder for time-series
- **Breast cancer:** Random Forest classification
- **Azure deployment:** Flask drug prescriber API

---

## App & Web Development

| Repository | Purpose | Tech Stack | Key Features |
|------------|---------|------------|--------------|
| [AppCOVIDv1](https://github.com/antibloch/AppCOVIDv1) | COVID contact tracing app | Flutter, Dart | Bluetooth beacon proximity, GPS logging, background upload |
| [CovidTrackerApp-Web_simple_GUI_login_register_send_emails](https://github.com/superdianuj/CovidTrackerApp-Web_simple_GUI_login_register_send_emails) | COVID web tracker | Node.js, Express | Dashboard, D3.js visualizations, GPS privacy APIs |
| [create_flowchart](https://github.com/dianujer/create_flowchart) | Flutter utilities | Flutter | Flowchart creation, background GPS, BLE beacon handling |

---

## Summary Statistics

| Category | Count |
|----------|-------|
| ML Privacy & Security | 15 |
| Radar & ECG Signal Processing | 7 |
| Computer Vision | 35 |
| Natural Language Processing | 14 |
| Chemical & Brain Analysis | 5 |
| Accelerometer, COVID & Misc | 4 |
| App & Web Development | 3 |
| **Total** | **83** |
