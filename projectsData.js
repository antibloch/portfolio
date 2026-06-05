const PROJECTS_DATA = [
  {
    "title": "mia_attacks",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/mia_attacks/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/mia_attacks/extra_img_2.png",
      "assets/images/projects/mia_attacks/extra_img_3.png",
      "assets/images/projects/mia_attacks/extra_img_4.png",
      "assets/images/projects/mia_attacks/extra_img_5.png",
      "assets/images/projects/mia_attacks/extra_img_6.png",
      "assets/images/projects/mia_attacks/extra_img_7.png"
    ],
    "extra_videos": [],
    "description": "Shadow Attack, LiRA, Quantile Regression and RMIA implementations in PyTorch (Online version) - antibloch/mia_attacks",
    "overview": "[1] Shokri, R., Stronati, M., Song, C. and Shmatikov, V., 2017, May. Membership inference attacks against machine learning models. In 2017 IEEE symposium on security and privacy (SP) (pp. 3-18). IEEE. \n\n[2] Carlini, Nicholas, Steve Chien, Milad Nasr, Shuang Song, Andreas Terzis, and Florian Tramer. \"Membership inference attacks from first principles.\" In 2022 IEEE Symposium on Security and Privacy (SP), pp. 1897-1914. IEEE, 2022.",
    "tech_stack": [
      "PyTorch",
      "scikit-learn"
    ],
    "features": "Baseline, Shokri shadow-model, LiRA, RMIA, quantile regression attacks",
    "url": "https://github.com/superdianuj/mia_attacks"
  },
  {
    "title": "DC_U",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/DC_U/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Dataset Condensation for Machine Unlearning",
    "overview": "I had to downsample the dataset for the sake of NTK based scrubbing method computation on 16GB RAM, 8 GB VRAM. \n\nThe repository: https://github.com/awslabs/fast-differential-privacy , was used as the differentially private optimizer for training of model.",
    "tech_stack": [
      "PyTorch",
      "Opacus",
      "ART"
    ],
    "features": "Unlearning via condensed data; compares NTK, Fisher, sparsity methods",
    "url": "https://github.com/algebraicdianuj/DC_U"
  },
  {
    "title": "DC_Unlearning",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/DC_Unlearning/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Distribution Matching for Approximate Unlearning",
    "overview": "",
    "tech_stack": [
      "PyTorch",
      "Opacus"
    ],
    "features": "Blend condensation + Accelerated-AMU; single/multi-round unlearning",
    "url": "https://github.com/algebraicdianuj/DC_Unlearning"
  },
  {
    "title": "ambitious_explorations_privacyattacks",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_2.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_3.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_4.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_5.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_6.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_7.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_8.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_9.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_10.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_11.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_12.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_13.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_14.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_15.png",
      "assets/images/projects/ambitious_explorations_privacyattacks/extra_img_16.png"
    ],
    "extra_videos": [],
    "description": "A study of self implementations of first memebership inference attack (MIA) and model inversion (MI) and some weak ideas surrounding them - antibloch/ambitious_explorations_privacyattacks",
    "overview": "Since Shokri\u2019s membership inference attack is the first of its kind and the most fundamental, it paved way for other attacks as well. A typical model may evolve its weights over training phase, and during inference the model is able to deal with real world data to produce outputs.\nIn black box setting, an adversary attacks this model by observing outputs of the model for given input, and adding this output vectors to an attack model\u2019s(which can be arbitrary machine learning model) input, that classifies whether that input was in dataset or not.\nIn this course, the shadow model comes into play to produce training dataset for the attack model, so that attack model learns to differentiates in-member output vectors from out-member output vectors.\nIn white box setting, the shadow model holds the same architecture as the target model. \n\nAll the zoo of membership inference attack models work on one principle, i.e. To infer the presence of information associated to a particular dataset in a private dataset, by only observing the model. This is illustrated in the above figure. Clearly, since a model can hold as much information as the original dataset in the most ideal case, practically evaluating the success of membership inference attack for a given model and expecting nearly 100 percent accuracy is not reasonable. That is so, because a practical model does not overfit on a private dataset, but rigorously regularized before deployment.\nIn this course, all available attack metrics tend to neglect this fact, and it leads to three main problems:\n-It does not allow the benchmark attack models to be properly be evaluated, allowing a risk of the same attack to be more accurate at the hands of adversary",
    "tech_stack": [
      "PyTorch",
      "scikit-learn"
    ],
    "features": "Remembrance metric, attention-based attack, GAN inversion",
    "url": "https://github.com/dianujer/ambitious_explorations_privacyattacks"
  },
  {
    "title": "explorations_over_privacyattacks",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/explorations_over_privacyattacks/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/explorations_over_privacyattacks/extra_img_2.png",
      "assets/images/projects/explorations_over_privacyattacks/extra_img_3.png",
      "assets/images/projects/explorations_over_privacyattacks/extra_img_4.png",
      "assets/images/projects/explorations_over_privacyattacks/extra_img_5.png",
      "assets/images/projects/explorations_over_privacyattacks/extra_img_6.png",
      "assets/images/projects/explorations_over_privacyattacks/extra_img_7.png",
      "assets/images/projects/explorations_over_privacyattacks/extra_img_8.png"
    ],
    "extra_videos": [],
    "description": "This repository is exploration of interaction between basic Membership Inference Attack (MIA), Model Inversion (MI) and Differential Privacy (DP) and Mutual Information Regularization - antibloch/e...",
    "overview": "This repository is exploration of interaction between basic Membership Inference Attack (MIA), Model Inversion (MI) and Differential Privacy (DP) and Mutual Information Regularization",
    "tech_stack": [
      "PyTorch",
      "scikit-learn"
    ],
    "features": "MIA and inversion attack benchmarks",
    "url": "https://github.com/dianujer/explorations_over_privacyattacks"
  },
  {
    "title": "poisoned_output_detection",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/poisoned_output_detection/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/poisoned_output_detection/extra_img_2.png",
      "assets/images/projects/poisoned_output_detection/extra_img_3.png"
    ],
    "extra_videos": [],
    "description": "This repo is a study on possible new methodology for detecting poisoned outputs of models proned to poisoning attacks - antibloch/poisoned_output_detection",
    "overview": "Here is my immediate theory of constructing a blackbox methodology to detect poisoned outputs of a given model (which can arbitrarily large). One would want to develope a black box methodology, owing to the fact that deployed models can go as big as 175 billion parameters. The main hypothesis of this apporach is that poisoned outputs are not prone to robustness, therefore exercise the robustness may reveal their identity: \n\nFor a given model, that takes an input S (can be image or text) and outputs G (can be image, text or probability vector) .The methodology would be to add three different small-scale models (as shown in below figure) over this given original model:",
    "tech_stack": [
      "PyTorch",
      "NumPy"
    ],
    "features": "Statistical detectors for manipulated outputs",
    "url": "https://github.com/dianujer/poisoned_output_detection"
  },
  {
    "title": "data_driven_attack_encryptedmodel",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_2.png",
      "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_3.png",
      "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_4.png",
      "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_5.png",
      "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_6.png",
      "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_7.png",
      "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_8.png",
      "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_9.png",
      "assets/images/projects/data_driven_attack_encryptedmodel/extra_img_10.png"
    ],
    "extra_videos": [],
    "description": "An attack against encrypted deep learning models, where the encryption function maps from real to real numbers - antibloch/data_driven_attack_encryptedmodel",
    "overview": "This is a study of attack on encrypted models, as a means to defend them when they are residing around server or embedded devices. One typical example is the encryption mechanism mentioned in \"Lin, Ning, et al. \"Chaotic weights: A novel approach to protect intellectual property of deep neural networks.\" IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems 40.7 (2020): 1327-1339.\".\nParticularly, the abstraction of encryption is that each parameters gets mapped from real to real domain, and the inverse encryption function function is not unique (can be a lot) when the parameters are unknown. AN example of such encryption scheme is the Arnold Chaotic map based encryption, the work on which was done by the mentioned paper, and will be the source of proof of concept for this work. \n\nMy theory surrounding the attack is that if we have a proxy of the original model, it has some rational training and validation curves. Now substituion of any encrypted layer with a given layer, should lead to drastic change in its training and validation curves, and the distinction can be captured in a deep learning manner. My motivation of attack is inspired from first Membership inference attack pipeline, though mine is different in several ways.",
    "tech_stack": [
      "PyTorch",
      "Pyfhel"
    ],
    "features": "Side-channel and inference-time attacks",
    "url": "https://github.com/dianujer/data_driven_attack_encryptedmodel"
  },
  {
    "title": "entropy_driven_MIA_defenses",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/entropy_driven_MIA_defenses/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/entropy_driven_MIA_defenses/extra_img_2.png",
      "assets/images/projects/entropy_driven_MIA_defenses/extra_img_3.png",
      "assets/images/projects/entropy_driven_MIA_defenses/extra_img_4.png",
      "assets/images/projects/entropy_driven_MIA_defenses/extra_img_5.png",
      "assets/images/projects/entropy_driven_MIA_defenses/extra_img_6.png",
      "assets/images/projects/entropy_driven_MIA_defenses/extra_img_7.png"
    ],
    "extra_videos": [],
    "description": "Variations of defenses for MIA by exploiting the concept of increasing entropy of final vector - antibloch/entropy_driven_MIA_defenses",
    "overview": "This repo is study of the significance of entropy of the classification vector of a classification model, in relationship to membership inference attack (MIA), as specified in this paper: He, Xinlei, et al. \"Membership-Doctor: Comprehensive Assessment of Membership Inference Against Machine Learning Models.\" arXiv preprint arXiv:2208.10445 (2022). \n\nMore specifically, this repo tries to compare several variations of defenses possible through increasing the entropy of the final output of a given classification model.",
    "tech_stack": [
      "TensorFlow Privacy"
    ],
    "features": "Evaluates softmax temperature/noise for MIA mitigation",
    "url": "https://github.com/dianujer/entropy_driven_MIA_defenses"
  },
  {
    "title": "cache_trace_analysis",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/cache_trace_analysis/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/cache_trace_analysis/extra_img_2.png",
      "assets/images/projects/cache_trace_analysis/extra_img_3.png",
      "assets/images/projects/cache_trace_analysis/extra_img_4.png",
      "assets/images/projects/cache_trace_analysis/extra_img_5.png",
      "assets/images/projects/cache_trace_analysis/extra_img_6.png",
      "assets/images/projects/cache_trace_analysis/extra_img_7.png",
      "assets/images/projects/cache_trace_analysis/extra_img_8.png",
      "assets/images/projects/cache_trace_analysis/extra_img_9.png",
      "assets/images/projects/cache_trace_analysis/extra_img_10.png",
      "assets/images/projects/cache_trace_analysis/extra_img_11.png",
      "assets/images/projects/cache_trace_analysis/extra_img_12.png"
    ],
    "extra_videos": [],
    "description": "A study of deep learning based classification of input variables of program using data- and instruction-cache traces, as well as detection of leakage of information through programs via differentia...",
    "overview": "A study of classification of input variables of program using data- and instruction-cache traces, as well as detection of leakage of information through programs.\nThe data, as documented in folder \"data5\", contains the d- and i-cache traces of a x86 program, which has input variables as certain strings. \n\nWe propose a data driven inference tool, that can infer the input variables, or atleast information about them, to a program from a given set of traces. This inference tool can be abstracted into two phases: information leakage and classification phase. This abstraction is shown in below figure. We proceed with describing these abstraction in following subsections.",
    "tech_stack": [
      "Jupyter",
      "Python"
    ],
    "features": "Input inference from d-cache/i-cache; Kolmogorov testing; 1D/2D classification",
    "url": "https://github.com/dianujer/cache_trace_analysis"
  },
  {
    "title": "machine_unlearning",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/machine_unlearning/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/machine_unlearning/extra_img_2.png",
      "assets/images/projects/machine_unlearning/extra_img_3.png",
      "assets/images/projects/machine_unlearning/extra_img_4.png"
    ],
    "extra_videos": [],
    "description": "Performing machine unlearning via gradient descent, instead of gradient ascent - antibloch/machine_unlearning",
    "overview": "This work basically was inspired by the original Machine unlearning paper, and I was surprised that basic graident ascent was not considered in that paper. Instead of wierd training data allocation scheme was devised, which can have high storage and computation overhead, as compared to simple gradient ascent. This is evident from the first paper, where the number of unlearning samples leads to exponential computation overhead, which wouldnot be the case for gradient ascent. \n\nI hereby replace the ascent with descent by minimizing $\\frac{1}{1+L(x,y)}$ instead of maximizing $L(x,y)$ , where {x,y} is the data sample to be unlearned, and $L(x,y)$ is the corresponding loss function.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Basic unlearning implementation",
    "url": "https://github.com/dianujer/machine_unlearning"
  },
  {
    "title": "faulty_honey_encryption",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/faulty_honey_encryption/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/faulty_honey_encryption/extra_img_2.png",
      "assets/images/projects/faulty_honey_encryption/extra_img_3.png"
    ],
    "extra_videos": [],
    "description": "This repo is intended to indicate a possible vulnerability in honey encryption methodology - antibloch/faulty_honey_encryption",
    "overview": "The honey encryption methodology is implemented in \"encrypt.py\", which is taken from repository: https://github.com/torjusbr/bip39-honey-encryption . \n\nThe honey encryption adds the zone of focus after decryption as well, where wrong keys can generate plausable plaintext.",
    "tech_stack": [
      "Python"
    ],
    "features": "Fault-based key recovery analysis",
    "url": "https://github.com/dianujer/faulty_honey_encryption"
  },
  {
    "title": "simple_adversarial_attack",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/simple_adversarial_attack/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Reference FGSM based adversarial attack on MNIST classification model - antibloch/simple_adversarial_attack",
    "overview": "",
    "tech_stack": [
      "PyTorch/TensorFlow"
    ],
    "features": "FGSM, PGD implementations",
    "url": "https://github.com/dianujer/simple_adversarial_attack"
  },
  {
    "title": "simple_data_poisoning",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/simple_data_poisoning/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "This repo shows simple data poisoning in a pytorch seq to seq model - antibloch/simple_data_poisoning",
    "overview": "With simple data poisoning, by injecting random synthetic data into the training dataset, the training accuracy is reduced.\nWhile the current dataset is based on \"Treebank dataset, it can be injected with cyberbully related corupus, like one from: https://ieee-dataport.org/open-access/fine-grained-balanced-cyberbullying-dataset",
    "tech_stack": [
      "scikit-learn",
      "PyTorch"
    ],
    "features": "Label flipping, backdoor insertion",
    "url": "https://github.com/dianujer/simple_data_poisoning"
  },
  {
    "title": "literature_secure_inference_edge",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/literature_secure_inference_edge/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/literature_secure_inference_edge/extra_img_2.png",
      "assets/images/projects/literature_secure_inference_edge/extra_img_3.png",
      "assets/images/projects/literature_secure_inference_edge/extra_img_4.png",
      "assets/images/projects/literature_secure_inference_edge/extra_img_5.png"
    ],
    "extra_videos": [],
    "description": "my literature review progression on secure inference of machine learning models on edge devices - antibloch/literature_secure_inference_edge",
    "overview": "[1] Lee, Taegyeong, et al. \"Occlumency: Privacy-preserving remote deep-learning inference using SGX.\"\u00a0The 25th Annual International Conference on Mobile Computing and Networking. 2019. \n\n[2] G\u00f6tzfried, Johannes, et al. \"Cache attacks on Intel SGX.\"\u00a0Proceedings of the 10th European Workshop on Systems Security. 2017.",
    "tech_stack": [
      "-"
    ],
    "features": "MPC, HE, Federated Learning literature",
    "url": "https://github.com/dianujer/literature_secure_inference_edge"
  },
  {
    "title": "ML_privacy_links",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "assets/images/projects/ML_privacy_links/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Useful repo links concerning ML-privacy domain.",
    "overview": "https://notebook.community/tensorflow/privacy/tensorflow_privacy/privacy/membership_inference_attack/codelab \n\nhttps://github.com/tensorflow/privacy/tree/master/tensorflow_privacy/privacy/privacy_tests/membership_inference_attack",
    "tech_stack": [
      "-"
    ],
    "features": "Curated repo links for PPML",
    "url": "https://github.com/dianujer/ML_privacy_links"
  },
  {
    "title": "vital_signs_instrument_project",
    "category": "radar",
    "categoryName": "Radar & ECG Signal Processing",
    "image": "assets/images/projects/vital_signs_instrument_project/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/vital_signs_instrument_project/extra_img_2.png",
      "assets/images/projects/vital_signs_instrument_project/extra_img_3.png",
      "assets/images/projects/vital_signs_instrument_project/extra_img_4.png",
      "assets/images/projects/vital_signs_instrument_project/extra_img_5.png"
    ],
    "extra_videos": [],
    "description": "This is a Pulse-Radar based Vital Signs measurement system, where the subject when place infront of a radar box, gets his/her HR, BR shown on Smartphone (Android, iOS) - antibloch/vital_signs_instr...",
    "overview": "-\"sennse2gol_code\" is intended to program the XMC4700 MCU on DEMO Sense2Gol Pulse board to get I/Q signals from radar transmission and reception signals. \n\n-\"raspberryPi_code\" is intended to perform advanced signal processing (mainly using VMD) to estimate heart and breathing rate from I/Q signals from the Pulse board.",
    "tech_stack": [
      "C (XMC4700)",
      "Python",
      "Flutter"
    ],
    "features": "I/Q radar processing, VMD, heart/breathing rate validation",
    "url": "https://github.com/dianujer/vital_signs_instrument_project"
  },
  {
    "title": "p5_conceptual_simul_of_radar",
    "category": "radar",
    "categoryName": "Radar & ECG Signal Processing",
    "image": "assets/images/projects/p5_conceptual_simul_of_radar/og_image.jpg",
    "extra_images": [],
    "extra_videos": [
      "assets/images/projects/p5_conceptual_simul_of_radar/extra_vid_1.mp4",
      "assets/images/projects/p5_conceptual_simul_of_radar/extra_vid_2.mp4",
      "assets/images/projects/p5_conceptual_simul_of_radar/extra_vid_3.mp4",
      "assets/images/projects/p5_conceptual_simul_of_radar/extra_vid_4.mp4",
      "assets/images/projects/p5_conceptual_simul_of_radar/extra_vid_5.mp4"
    ],
    "description": "This repo contains conceptual visualization of how Radar can be used to measure vital signs - antibloch/p5_conceptual_simul_of_radar_j",
    "overview": "Following shows how the heart and lungs contracy and relax independently to form an overall fourier series. \n\nFollowing shows how curvature of a signal effects the Fourier series as the distribution of sizes of the circle that correspond to Fouier series.",
    "tech_stack": [
      "p5.js"
    ],
    "features": "Wave propagation and vital-sign detection concepts",
    "url": "https://github.com/dianujer/p5_conceptual_simul_of_radar"
  },
  {
    "title": "HR_BR_Radar_ECG",
    "category": "radar",
    "categoryName": "Radar & ECG Signal Processing",
    "image": "assets/images/projects/HR_BR_Radar_ECG/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/HR_BR_Radar_ECG/extra_img_2.png",
      "assets/images/projects/HR_BR_Radar_ECG/extra_img_3.png",
      "assets/images/projects/HR_BR_Radar_ECG/extra_img_4.png",
      "assets/images/projects/HR_BR_Radar_ECG/extra_img_5.png",
      "assets/images/projects/HR_BR_Radar_ECG/extra_img_6.png",
      "assets/images/projects/HR_BR_Radar_ECG/extra_img_7.png"
    ],
    "extra_videos": [],
    "description": "This repo is a comparison study of HR and BR measurement using Doppler Radar and ECG - antibloch/HR_BR_Radar_ECG_j",
    "overview": "This repository contains algorithms for measurement of heart rate and breathing rate from radar (Infenion Sense2Gol Demo) and ECG (NodeMCU-AD8232).",
    "tech_stack": [
      "Python (NumPy",
      "SciPy)"
    ],
    "features": "HR/BR validation against ground truth",
    "url": "https://github.com/dianujer/HR_BR_Radar_ECG"
  },
  {
    "title": "ECG_HeartRate_Methods",
    "category": "radar",
    "categoryName": "Radar & ECG Signal Processing",
    "image": "assets/images/projects/ECG_HeartRate_Methods/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "This repository contains application of 13 different methods for measurement of Heart rate from ECG - antibloch/ECG_HeartRate_Methods_j",
    "overview": "The CSV files contain ECG voltage data gotten from AD8232 module, and the title contains the reference Mi-Band 3 based HR value, and also HR value gotten through manual measurement.",
    "tech_stack": [
      "Python",
      "WFDB",
      "MATLAB"
    ],
    "features": "Pan-Tompkins, Wavelet, FFT methods",
    "url": "https://github.com/dianujer/ECG_HeartRate_Methods"
  },
  {
    "title": "ECG_BreathingRate_Methods",
    "category": "radar",
    "categoryName": "Radar & ECG Signal Processing",
    "image": "assets/images/projects/ECG_BreathingRate_Methods/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "This repository contains total of 4 breathing rate measurement methods from ECG signals. - antibloch/ECG_BreathingRate_Methods_j",
    "overview": "The CSV files contain ECG voltage data gotten from AD8232 module, and the title contains the reference Mi-Band 3 based HR value, and also HR value gotten through manual measurement",
    "tech_stack": [
      "Python",
      "WFDB",
      "MATLAB"
    ],
    "features": "Respiratory rate extraction from ECG",
    "url": "https://github.com/dianujer/ECG_BreathingRate_Methods"
  },
  {
    "title": "ECG_measurement_system",
    "category": "radar",
    "categoryName": "Radar & ECG Signal Processing",
    "image": "assets/images/projects/ECG_measurement_system/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/ECG_measurement_system/extra_img_2.png"
    ],
    "extra_videos": [],
    "description": "This repo involves using ECG based HR and BR measurement using NodeMCU and Python - antibloch/ECG_measurement_system_j",
    "overview": "The setup comprised of ECG 3-channel electrodes, connected to a AD8232 module. The connection of 3 electrodes to body placement is shown below. \n\nNodeMCU ESP8266 collects the ECG signals from it at 360 Hz sampling frequency and this data and transports the data to PC for application of signal processing to extract heart rate and breathing rate. Then the python script gets those signals, and performs signal processing to get HR and BR.",
    "tech_stack": [
      "C/C++",
      "Python",
      "MATLAB"
    ],
    "features": "Signal acquisition and analysis",
    "url": "https://github.com/dianujer/ECG_measurement_system"
  },
  {
    "title": "InfenionSense2Gol_Vital_signs",
    "category": "radar",
    "categoryName": "Radar & ECG Signal Processing",
    "image": "assets/images/projects/InfenionSense2Gol_Vital_signs/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/InfenionSense2Gol_Vital_signs/extra_img_2.png"
    ],
    "extra_videos": [
      "assets/images/projects/InfenionSense2Gol_Vital_signs/extra_vid_1.mp4",
      "assets/images/projects/InfenionSense2Gol_Vital_signs/extra_vid_2.mp4",
      "assets/images/projects/InfenionSense2Gol_Vital_signs/extra_vid_3.mp4"
    ],
    "description": "Matlab based measuring HR and BR from Pulse Doppler Radar Signals using Infenion Sense2Gol Demo board - antibloch/InfenionSense2Gol_Vital_signs_j",
    "overview": "This repository essential measures heart rate and breathing rate from I and Q signals of Infenion's Sense2Gol radar. The \"extract_raw_data\" file is edited from communication library of Infenion. \n\nAs shown in following video, with idea of distance visible from below video, the heart rate is being measured.",
    "tech_stack": [
      "MATLAB"
    ],
    "features": "I/Q data processing, FFT, VMD",
    "url": "https://github.com/dianujer/InfenionSense2Gol_Vital_signs"
  },
  {
    "title": "nerf_synthetic_blur",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/nerf_synthetic_blur/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/nerf_synthetic_blur/extra_img_2.png",
      "assets/images/projects/nerf_synthetic_blur/extra_img_3.png",
      "assets/images/projects/nerf_synthetic_blur/extra_img_4.png"
    ],
    "extra_videos": [],
    "description": "Comparison of NeRF variants and Deblurring Model+ NeRF on synthetically blurred image datasets - antibloch/nerf_synthetic_blur",
    "overview": "Modification of NeRF pipeline to deal with blurred images can be very costly in terms of training latency. On the other hand, if one deblurs the images before pose estimation of COLMAP, then not only would lead to better pose estimation, but also the training time would be asymptotic to original NeRF. What I am thinking is this: \n\nFor the synthetic blurring of images, for the purpose of observing deblurring performance, I am considering following three deblurring types:",
    "tech_stack": [
      "PyTorch",
      "NeRF"
    ],
    "features": "DeblurGAN, NAFNet integration for blurred scenes",
    "url": "https://github.com/superdianuj/nerf_synthetic_blur"
  },
  {
    "title": "nerf_real_blur",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/nerf_real_blur/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/nerf_real_blur/extra_img_2.png",
      "assets/images/projects/nerf_real_blur/extra_img_3.png",
      "assets/images/projects/nerf_real_blur/extra_img_4.png"
    ],
    "extra_videos": [],
    "description": "Comparison of NeRF variants and Deblurring Model+ NeRF on real life blurred image datasets - antibloch/nerf_real_blur",
    "overview": "Modification of NeRF pipeline to deal with blurred images can be very costly in terms of training latency. On the other hand, if one deblurs the images before pose estimation of COLMAP, then not only would lead to better pose estimation, but also the training time would be asymptotic to original NeRF. What I am thinking is this:",
    "tech_stack": [
      "PyTorch",
      "NeRF"
    ],
    "features": "Motion blur, low-light handling",
    "url": "https://github.com/superdianuj/nerf_real_blur"
  },
  {
    "title": "gaussian_splt_blur",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/gaussian_splt_blur/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/gaussian_splt_blur/extra_img_2.gif",
      "assets/images/projects/gaussian_splt_blur/extra_img_3.gif",
      "assets/images/projects/gaussian_splt_blur/extra_img_4.gif",
      "assets/images/projects/gaussian_splt_blur/extra_img_5.gif",
      "assets/images/projects/gaussian_splt_blur/extra_img_6.gif",
      "assets/images/projects/gaussian_splt_blur/extra_img_7.gif",
      "assets/images/projects/gaussian_splt_blur/extra_img_8.gif",
      "assets/images/projects/gaussian_splt_blur/extra_img_9.gif",
      "assets/images/projects/gaussian_splt_blur/extra_img_10.gif"
    ],
    "extra_videos": [],
    "description": "Comparison of BAD-Gaussian and Deblurring Model+ Gaussian Splatting on real life blurred and synthetically image datasets - antibloch/gaussian_splt_blur",
    "overview": "Modification of Gaussian Splatting pipeline to deal with blurred images can be very costly in terms of training latency. On the other hand, if one deblurs the images before pose estimation of COLMAP, then not only would lead to better pose estimation, but also the training time would be asymptotic to original Gaussian Splatting. What I am thinking is this: \n\nFor blurring, I consider both real and synthetic cases. For the synthetic blurring of images, for the purpose of observing deblurring performance, I am considering following three deblurring types:",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "3D scene rendering from blurred data",
    "url": "https://github.com/superdianuj/gaussian_splt_blur"
  },
  {
    "title": "imp_gaussian_splatting",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/imp_gaussian_splatting/extra_img_1.gif",
    "extra_images": [
      "assets/images/projects/imp_gaussian_splatting/extra_img_2.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_3.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_4.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_5.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_6.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_7.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_8.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_9.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_10.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_11.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_12.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_13.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_14.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_15.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_16.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_17.gif",
      "assets/images/projects/imp_gaussian_splatting/extra_img_18.gif"
    ],
    "extra_videos": [],
    "description": "Improvement of 3D Gaussian Splatting from image deblurring and super-resolution perspective - antibloch/imp_gaussian_splatting",
    "overview": "I use Nerfstudio (which uses Splatfacto ) and Hloc for rendering the gaussian splats, and use original GS repo code for evaluating metrics. For rendering and evaluation, run:",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Denoising, adaptive sampling improvements",
    "url": "https://github.com/superdianuj/imp_gaussian_splatting"
  },
  {
    "title": "improved_SuGaR",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/improved_SuGaR/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/improved_SuGaR/extra_img_2.png",
      "assets/images/projects/improved_SuGaR/extra_img_3.png",
      "assets/images/projects/improved_SuGaR/extra_img_4.png",
      "assets/images/projects/improved_SuGaR/extra_img_5.png",
      "assets/images/projects/improved_SuGaR/extra_img_6.png",
      "assets/images/projects/improved_SuGaR/extra_img_7.png"
    ],
    "extra_videos": [],
    "description": "Improvement of SuGaR  based Gaussian Splatting and Mesh reoncstruction via focus on preprocessing of images from Super Resolution and Deblurring perspective - antibloch/improved_SuGaR",
    "overview": "This project is intended to improve results of SuGaR (both rendering and mesh reconstruction) from the perspective of improving quality of images that is fed into COLMAP, and then GS.\nIn this course, I employ deblurring, followed by super resolution to improve quality of images that are fodder to a rather complicated scheme.\nThe great thing about this is that it leads to obvious rooms for novelties, but I am not here for publications, am I? But only I can exploit the most fruitful novelties. \n\nAnother thing to note is that NAFNet works much better than Diffusion based approach for faithful debluring.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Surface-aligned Gaussian Splatting improvements",
    "url": "https://github.com/superdianuj/improved_SuGaR"
  },
  {
    "title": "gaussian_talker_ablation",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/gaussian_talker_ablation/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "This is some quick ablation experiments on the paper &quot;GaussianTalker: Real-Time High-Fidelity Talking Head Synthesis with Audio-Driven 3D Gaussian Splatting&quot; - antibloch/gaussian_talker_a...",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Speech generation model studies",
    "url": "https://github.com/superdianuj/gaussian_talker_ablation"
  },
  {
    "title": "gaussian-splatting",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/gaussian-splatting/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/gaussian-splatting/extra_img_2.png",
      "assets/images/projects/gaussian-splatting/extra_img_3.png",
      "assets/images/projects/gaussian-splatting/extra_img_4.png",
      "assets/images/projects/gaussian-splatting/extra_img_5.png",
      "assets/images/projects/gaussian-splatting/extra_img_6.png",
      "assets/images/projects/gaussian-splatting/extra_img_7.png"
    ],
    "extra_videos": [],
    "description": "Original reference implementation of \"3D Gaussian Splatting for Real-Time Radiance Field Rendering\" - antibloch/gaussian-splatting",
    "overview": "Polycam provides Gaussian splatting over an image dataset using their propieratary methods. I use this result as oracle for open source implementations, as in this repo. \n\nWhen directly convert the video into frames, and using colmap and train script of this repo, I got following results.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Configuration and dataset experiments",
    "url": "https://github.com/antibloch/gaussian-splatting"
  },
  {
    "title": "gaussian_heart",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/gaussian_heart/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/gaussian_heart/extra_img_2.png",
      "assets/images/projects/gaussian_heart/extra_img_3.gif",
      "assets/images/projects/gaussian_heart/extra_img_4.gif"
    ],
    "extra_videos": [],
    "description": "Gaussian Splatting demo",
    "overview": "Training performance: https://drive.google.com/file/d/15bbiPrhZRFZPjEjRU7S9Ikkxx2UBTzyO/view?usp=sharing \n\nTest Performance: https://drive.google.com/file/d/1QtYhsZzvg10HwDZLKvKwvJr6k1fUXXVn/view?usp=drive_link",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Heart-shaped Gaussian rendering",
    "url": "https://github.com/antidianuj/gaussian_heart"
  },
  {
    "title": "simple_nerf",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/simple_nerf/extra_img_1.gif",
    "extra_images": [
      "assets/images/projects/simple_nerf/extra_img_2.gif"
    ],
    "extra_videos": [],
    "description": "Simplified NeRF comparison over MLP, CNN and Attention Architecture - antibloch/simple_nerf",
    "overview": "This is a basic exploratory tensorflow implementation of the paper \"NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis\". It comprises of two exploration parts. One part consists of only startified sampling (coarse grained sampling) and the other part consists of bother startified as well as hierarchical sampling (fine-grained sampling). \n\nThe dataset utilizied is: http://cseweb.ucsd.edu/~viscomp/projects/LF/papers/ECCV20/nerf/tiny_nerf_data.npz",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Architecture benchmarking",
    "url": "https://github.com/antidianuj/simple_nerf"
  },
  {
    "title": "colmap_installation_directs",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/colmap_installation_directs/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "COLMAP setup guide",
    "overview": "",
    "tech_stack": [
      "-"
    ],
    "features": "Structure-from-Motion toolkit installation",
    "url": "https://github.com/antidianuj/colmap_installation_directs"
  },
  {
    "title": "NAFNet",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/NAFNet/extra_img_1.gif",
    "extra_images": [
      "assets/images/projects/NAFNet/extra_img_2.gif"
    ],
    "extra_videos": [],
    "description": "Nonlinear Activation Free Network",
    "overview": "",
    "tech_stack": [
      "PyTorch",
      "CUDA"
    ],
    "features": "State-of-the-art denoising/deblurring",
    "url": "https://github.com/superdianuj/NAFNet"
  },
  {
    "title": "SPSR",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/SPSR/extra_img_1.gif",
    "extra_images": [
      "assets/images/projects/SPSR/extra_img_2.png"
    ],
    "extra_videos": [
      "assets/images/projects/SPSR/extra_vid_1.mp4",
      "assets/images/projects/SPSR/extra_vid_2.mp4"
    ],
    "description": "Super Pixel-Shuffle SR",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Super-resolution algorithm",
    "url": "https://github.com/superdianuj/SPSR"
  },
  {
    "title": "HI-Diff",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/HI-Diff/extra_img_1.gif",
    "extra_images": [
      "assets/images/projects/HI-Diff/extra_img_2.gif",
      "assets/images/projects/HI-Diff/extra_img_3.gif"
    ],
    "extra_videos": [
      "assets/images/projects/HI-Diff/extra_vid_1.mp4",
      "assets/images/projects/HI-Diff/extra_vid_2.mp4",
      "assets/images/projects/HI-Diff/extra_vid_3.mp4"
    ],
    "description": "High-Order Diffusion",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Deblurring via diffusion",
    "url": "https://github.com/superdianuj/HI-Diff"
  },
  {
    "title": "Diff-PIR",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/Diff-PIR/extra_img_1.gif",
    "extra_images": [
      "assets/images/projects/Diff-PIR/extra_img_2.gif",
      "assets/images/projects/Diff-PIR/extra_img_3.gif",
      "assets/images/projects/Diff-PIR/extra_img_4.gif"
    ],
    "extra_videos": [],
    "description": "Diffusion-Prior Image Restoration",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Deblurring with diffusion prior",
    "url": "https://github.com/superdianuj/Diff-PIR"
  },
  {
    "title": "DiffBIR",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/DiffBIR/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/DiffBIR/extra_img_2.svg",
      "assets/images/projects/DiffBIR/extra_img_3.png",
      "assets/images/projects/DiffBIR/extra_img_4.png",
      "assets/images/projects/DiffBIR/extra_img_5.png",
      "assets/images/projects/DiffBIR/extra_img_6.png",
      "assets/images/projects/DiffBIR/extra_img_7.png",
      "assets/images/projects/DiffBIR/extra_img_8.png",
      "assets/images/projects/DiffBIR/extra_img_9.png",
      "assets/images/projects/DiffBIR/extra_img_10.png",
      "assets/images/projects/DiffBIR/extra_img_11.png",
      "assets/images/projects/DiffBIR/extra_img_12.png",
      "assets/images/projects/DiffBIR/extra_img_13.png",
      "assets/images/projects/DiffBIR/extra_img_14.png"
    ],
    "extra_videos": [],
    "description": "[ECCV 2024] codes of DiffBIR: Towards Blind Image Restoration with Generative Diffusion Prior - antibloch/DiffBIR",
    "overview": "Xinqi Lin 1,* , Jingwen He 2,3,* , Ziyan Chen 1 , Zhaoyang Lyu 2 , Bo Dai 2 , Fanghua Yu 1 , Wanli Ouyang 2 , Yu Qiao 2 , Chao Dong 1,2 \n\n1 Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences 2 Shanghai AI Laboratory 3 The Chinese University of Hong Kong",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Blind restoration methods",
    "url": "https://github.com/antibloch/DiffBIR"
  },
  {
    "title": "ESRGAN",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/ESRGAN/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/ESRGAN/extra_img_2.png",
      "assets/images/projects/ESRGAN/extra_img_3.png",
      "assets/images/projects/ESRGAN/extra_img_4.png",
      "assets/images/projects/ESRGAN/extra_img_5.png",
      "assets/images/projects/ESRGAN/extra_img_6.png",
      "assets/images/projects/ESRGAN/extra_img_7.png",
      "assets/images/projects/ESRGAN/extra_img_8.png",
      "assets/images/projects/ESRGAN/extra_img_9.png",
      "assets/images/projects/ESRGAN/extra_img_10.png",
      "assets/images/projects/ESRGAN/extra_img_11.png",
      "assets/images/projects/ESRGAN/extra_img_12.png",
      "assets/images/projects/ESRGAN/extra_img_13.png",
      "assets/images/projects/ESRGAN/extra_img_14.gif",
      "assets/images/projects/ESRGAN/extra_img_15.gif",
      "assets/images/projects/ESRGAN/extra_img_16.gif",
      "assets/images/projects/ESRGAN/extra_img_17.gif"
    ],
    "extra_videos": [
      "assets/images/projects/ESRGAN/extra_vid_1.mp4",
      "assets/images/projects/ESRGAN/extra_vid_2.mp4",
      "assets/images/projects/ESRGAN/extra_vid_3.mp4",
      "assets/images/projects/ESRGAN/extra_vid_4.mp4"
    ],
    "description": "Super-Resolution GAN",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Photo-realistic SR with RRDB",
    "url": "https://github.com/superdianuj/ESRGAN"
  },
  {
    "title": "super_resolution",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/super_resolution/extra_img_1.gif",
    "extra_images": [
      "assets/images/projects/super_resolution/extra_img_2.gif",
      "assets/images/projects/super_resolution/extra_img_3.gif",
      "assets/images/projects/super_resolution/extra_img_4.gif",
      "assets/images/projects/super_resolution/extra_img_5.gif",
      "assets/images/projects/super_resolution/extra_img_6.gif",
      "assets/images/projects/super_resolution/extra_img_7.gif",
      "assets/images/projects/super_resolution/extra_img_8.gif"
    ],
    "extra_videos": [
      "assets/images/projects/super_resolution/extra_vid_1.mp4",
      "assets/images/projects/super_resolution/extra_vid_2.mp4"
    ],
    "description": "Classical SR models",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "SRCNN, Nina-SR implementations",
    "url": "https://github.com/superdianuj/super_resolution"
  },
  {
    "title": "SUPIR",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/SUPIR/extra_img_1.jpg",
    "extra_images": [
      "assets/images/projects/SUPIR/extra_img_2.png"
    ],
    "extra_videos": [],
    "description": "SUPIR aims at developing Practical Algorithms for Photo-Realistic Image Restoration In the Wild - antibloch/SUPIR",
    "overview": "For users who can connect to huggingface, please setting LLAVA_CLIP_PATH, SDXL_CLIP1_PATH, SDXL_CLIP2_CKPT_PTH in CKPT_PTH.py as None . These CLIPs will be downloaded automatically. \n\nTraining with light degradation settings. Stage1 encoder of SUPIR-v0F remains more details when facing light degradations.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Joint deblurring + super-resolution",
    "url": "https://github.com/superdianuj/SUPIR"
  },
  {
    "title": "siren_exps",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/siren_exps/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/siren_exps/extra_img_2.png",
      "assets/images/projects/siren_exps/extra_img_3.png",
      "assets/images/projects/siren_exps/extra_img_4.png",
      "assets/images/projects/siren_exps/extra_img_5.jpg"
    ],
    "extra_videos": [],
    "description": "Experiments over SIREN from \"Implicit Neural Representations with Periodic Activation Functions\" - antibloch/siren_exps",
    "overview": "This work is few experiments on the idea of using sinusoidal activation function for multi-layer perceptron (MLP), as the paper \"Implicit Neural Representations with Periodic Activation Functions\". The code is adapted from https://github.com/jankrepl/mildlyoverfitted/tree/master/github_adventures/siren . \n\nAssuming the pytorch, opencv, scipy and matplotlib are installed in an environment with python>=3.9, the attributes of this work (1-4) are implemented and reproduced by",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Sinusoidal Representation Networks",
    "url": "https://github.com/antidianuj/siren_exps"
  },
  {
    "title": "SAM_pointcloud_segment",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/SAM_pointcloud_segment/extra_img_1.jpg",
    "extra_images": [
      "assets/images/projects/SAM_pointcloud_segment/extra_img_2.jpg",
      "assets/images/projects/SAM_pointcloud_segment/extra_img_3.jpg",
      "assets/images/projects/SAM_pointcloud_segment/extra_img_4.jpg",
      "assets/images/projects/SAM_pointcloud_segment/extra_img_5.png",
      "assets/images/projects/SAM_pointcloud_segment/extra_img_6.png"
    ],
    "extra_videos": [],
    "description": "Unsupervised 3D Point Cloud Segmentation using SAM - antibloch/SAM_pointcloud_segment",
    "overview": "",
    "tech_stack": [
      "PyTorch",
      "SAM"
    ],
    "features": "2D projection \u2192 SAM \u2192 3D label mapping",
    "url": "https://github.com/superdianuj/SAM_pointcloud_segment"
  },
  {
    "title": "infer_pc",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/infer_pc/extra_img_1.png",
    "extra_images": [],
    "extra_videos": [],
    "description": "Inference of PointCloud over Pretrained Models using Open3D-ML - antibloch/infer_pc",
    "overview": "Open3D-ML is used to get pretrained models (over different datasets) and infer on sample point clouds. Unfortunately, not all pretrained models seems to work (especially RandLANet).",
    "tech_stack": [
      "PyTorch",
      "Open3D"
    ],
    "features": "PointNet++, RandLA-Net inference",
    "url": "https://github.com/antibloch/infer_pc"
  },
  {
    "title": "PointCloudSegmentation",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/PointCloudSegmentation/extra_img_1.jpg",
    "extra_images": [
      "assets/images/projects/PointCloudSegmentation/extra_img_2.jpg",
      "assets/images/projects/PointCloudSegmentation/extra_img_3.jpg"
    ],
    "extra_videos": [],
    "description": "A point cloud segmentation algorithm based on clustering analysis - antibloch/PointCloudSegmentation",
    "overview": "Pairwise Linkage for Point Cloud Segmentation, Xiaohu Lu, etc. ISPRS2016. https://github.com/xiaohulugo/xiaohulugo.github.com/blob/master/papers/PLinkage_Point_Segmentation_ISPRS2016.pdf \n\nFeel free to correct my code, if you spotted the mistakes. You are also welcomed to Email me: fangzelu@gmail.com",
    "tech_stack": [
      "Python"
    ],
    "features": "Linkage algorithms for point clouds",
    "url": "https://github.com/antibloch/PointCloudSegmentation"
  },
  {
    "title": "ballast_extract_pointprocess",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/ballast_extract_pointprocess/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/ballast_extract_pointprocess/extra_img_2.png",
      "assets/images/projects/ballast_extract_pointprocess/extra_img_3.png"
    ],
    "extra_videos": [],
    "description": "Point cloud processing techniques for extracting ballast areas from 3D point clouds - antibloch/ballast_extract_pointprocess",
    "overview": "",
    "tech_stack": [
      "Python"
    ],
    "features": "LiDAR point processing for railway",
    "url": "https://github.com/antibloch/ballast_extract_pointprocess"
  },
  {
    "title": "pointnet_training_comp",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/pointnet_training_comp/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/pointnet_training_comp/extra_img_2.png"
    ],
    "extra_videos": [],
    "description": "Training comparison between training on academic dataset and manually annotated dataset for road segmentation - antibloch/pointnet_training_comp",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Training scheme benchmarking",
    "url": "https://github.com/antibloch/pointnet_training_comp"
  },
  {
    "title": "balast_seg",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/balast_seg/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/balast_seg/extra_img_2.png",
      "assets/images/projects/balast_seg/extra_img_3.png",
      "assets/images/projects/balast_seg/extra_img_4.png",
      "assets/images/projects/balast_seg/extra_img_5.png",
      "assets/images/projects/balast_seg/extra_img_6.png",
      "assets/images/projects/balast_seg/extra_img_7.png"
    ],
    "extra_videos": [],
    "description": "Segmentation of Ballast of Rail Track Using Orthographic Projection and Segmentation - antibloch/balast_seg",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Ballast point cloud segmentation with diffusion models, 2D segementation models, and 3D to 2D to 3D projections",
    "url": "https://github.com/antibloch/balast_seg"
  },
  {
    "title": "LSK3DNet",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/LSK3DNet/extra_img_1.png",
    "extra_images": [],
    "extra_videos": [],
    "description": "This is the official implementation of \"LSK3DNet: Towards Effective and Efficient 3D Perception with Large Sparse Kernels\" (Accepted at CVPR 2024). - antibloch/LSK3DNet",
    "overview": "LSK3DNet: Towards Effective and Efficient 3D Perception with Large Sparse Kernels Tuo Feng , Wenguan Wang , Fan Ma , Yi Yang \n\nThis is the official implementation of \"LSK3DNet: Towards Effective and Efficient 3D Perception with Large Sparse Kernels\" (Accepted at CVPR 2024).",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Point cloud segmentation",
    "url": "https://github.com/antibloch/LSK3DNet"
  },
  {
    "title": "RandLA-Net-pytorch",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/RandLA-Net-pytorch/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": ":four_leaf_clover: Pytorch Implementation of RandLA-Net (https://arxiv.org/abs/1911.11236) - antibloch/RandLA-Net-pytorch",
    "overview": "Note: if the flag --index_to_label is set, output predictions will be \".label\" files (label figure) which can be visualized; Otherwise, they will be \".npy\" (0-19 index) files which is used to evaluated afterward. \n\nFor getting reference .ply files from the semanticKITTI dataset, please run the following command. Rest I will leave to your intelligence:",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Large-scale point cloud segmentation",
    "url": "https://github.com/antibloch/RandLA-Net-pytorch"
  },
  {
    "title": "kprnet",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/kprnet/extra_img_1.gif",
    "extra_images": [
      "assets/images/projects/kprnet/extra_img_2.gif"
    ],
    "extra_videos": [],
    "description": "Keypoint-based segmentation",
    "overview": "Download pre-trained resnext_cityscapes_2p.pth . The path should be given in model_dir .  CityScapes pretraining will be added later.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "KPRNet implementation",
    "url": "https://github.com/antibloch/kprnet"
  },
  {
    "title": "mod_kprnet",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/mod_kprnet/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/mod_kprnet/extra_img_2.png",
      "assets/images/projects/mod_kprnet/extra_img_3.png",
      "assets/images/projects/mod_kprnet/extra_img_4.png",
      "assets/images/projects/mod_kprnet/extra_img_5.png",
      "assets/images/projects/mod_kprnet/extra_img_6.png"
    ],
    "extra_videos": [],
    "description": "Modified KPRNet",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "2D-to-3D mapping variant",
    "url": "https://github.com/antibloch/mod_kprnet"
  },
  {
    "title": "SphereFormer",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/SphereFormer/extra_img_1.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "The official implementation for \"Spherical Transformer for LiDAR-based 3D Recognition\" (CVPR 2023). - antibloch/SphereFormer",
    "overview": "Note: Make sure you have installed gcc and cuda , and nvcc can work (if you install cuda by conda, it won't provide nvcc and you should install cuda manually.) \n\nDownload the nuScenes dataset from here . Unzip and arrange it as follows. Then fill in the data_root entry in the .yaml configuration file.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Spherical projection point cloud transformer",
    "url": "https://github.com/antibloch/SphereFormer"
  },
  {
    "title": "LiDAR_Line_Detection",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/LiDAR_Line_Detection/extra_img_1.png",
    "extra_images": [],
    "extra_videos": [],
    "description": "Line detection in LiDAR point cloud data.",
    "overview": "A simple and efficient 3D line detection algorithm for large scale unorganized point cloud. A conference paper based on this code can be found here https://arxiv.org/abs/1901.02532",
    "tech_stack": [
      "Python"
    ],
    "features": "RANSAC/Hough for LiDAR lines/planes",
    "url": "https://github.com/superdianuj/LiDAR_Line_Detection"
  },
  {
    "title": "pointnet_segmentation",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/pointnet_segmentation/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/pointnet_segmentation/extra_img_2.png",
      "assets/images/projects/pointnet_segmentation/extra_img_3.png",
      "assets/images/projects/pointnet_segmentation/extra_img_4.png"
    ],
    "extra_videos": [],
    "description": "Supervised PointNet Segmentation.",
    "overview": "Dataset Download the dataset 'Stanford3dDataset_v1.2_Aligned_Version' in 'point_net' folder.\nAlso for testing on new scan (much different than dataset), I suggest to download scans from here , particularly scans in here , and place them in 'point_net' folder",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Indoor scene segmentation",
    "url": "https://github.com/superdianuj/pointnet_segmentation"
  },
  {
    "title": "uniform_color_detect",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/uniform_color_detect/extra_img_1.jpg",
    "extra_images": [
      "assets/images/projects/uniform_color_detect/extra_img_2.png",
      "assets/images/projects/uniform_color_detect/extra_img_3.png",
      "assets/images/projects/uniform_color_detect/extra_img_4.png",
      "assets/images/projects/uniform_color_detect/extra_img_5.png",
      "assets/images/projects/uniform_color_detect/extra_img_6.png"
    ],
    "extra_videos": [],
    "description": "YOLOv11 and SegFormer based video shirt color detection  - antibloch/uniform_color_detect",
    "overview": "For a given video of hockey player (other sport players), create bounding boxes of color same as that of uniform shirt player, with name of the color shown on top cornor of bounding box. \n\nTested with Ubuntu 22. For other OS (other than linux), manually setting up conda environment would be required, than the following .sh file process.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "YOLOv11 + Segformer for color identification",
    "url": "https://github.com/antibloch/uniform_color_detect"
  },
  {
    "title": "yolo_detection_tracking",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/yolo_detection_tracking/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/yolo_detection_tracking/extra_img_2.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_3.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_4.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_5.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_6.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_7.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_8.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_9.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_10.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_11.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_12.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_13.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_14.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_15.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_16.png",
      "assets/images/projects/yolo_detection_tracking/extra_img_17.png"
    ],
    "extra_videos": [],
    "description": "YOLO object detecting and tracking.",
    "overview": "This work utilizes several open source repos on YOLO based detection and tracking (using DeepSORT), in a crude and lazy manner, to serve as reference. Furthermore, it exposes a fundamental problem with detection and tracking. Detection is significantly better than tracking, and occlusion very easily seeps over time within a video.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "YOLO with SORT/DeepSORT",
    "url": "https://github.com/superdianuj/yolo_detection_tracking"
  },
  {
    "title": "PeopleNet_Object_Tracking",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/PeopleNet_Object_Tracking/og_image.jpg",
    "extra_images": [],
    "extra_videos": [
      "assets/images/projects/PeopleNet_Object_Tracking/extra_vid_1.mp4"
    ],
    "description": "PeopleNet and DeepSORT based object detection and tracking - antibloch/PeopleNet_Object_Tracking",
    "overview": "Savant is framework build over Nvidia's DeepStream that provides a flexible solution to provide real time video analytics solution on GPU and edge devices, at much lower latency than using frameworks like PyTorch and Tensorflow. \n\nIf the target video file is of another name, then change the above code accordingly, as well as the name of file in 'docker-compose.x86.yml' in Savant/samples/peoplenet_detector.",
    "tech_stack": [
      "NVIDIA TAO"
    ],
    "features": "PeopleNet-based detection/tracking",
    "url": "https://github.com/superdianuj/PeopleNet_Object_Tracking"
  },
  {
    "title": "MinimaxDiffusion",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/MinimaxDiffusion/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "[CVPR2024] Efficient Dataset Distillation via Minimax Diffusion - antibloch/MinimaxDiffusion",
    "overview": "",
    "tech_stack": [
      "PyTorch",
      "Diffusion"
    ],
    "features": "Synthetic data generation with minimax optimization",
    "url": "https://github.com/antibloch/MinimaxDiffusion"
  },
  {
    "title": "denoising-diffusion-pytorch",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/denoising-diffusion-pytorch/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/denoising-diffusion-pytorch/extra_img_2.png"
    ],
    "extra_videos": [],
    "description": "Implementation of Denoising Diffusion Probabilistic Models in PyTorch - antibloch/denoising-diffusion-pytorch",
    "overview": "Also, you can tried to use improved configurations from https://openreview.net/forum?id=-NEXDKk8gZ (Cosine beta schedule, more multi-headed self attention, affine modulation for time conditions, new training hyperparameters.)",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "DDPM implementation",
    "url": "https://github.com/antibloch/denoising-diffusion-pytorch"
  },
  {
    "title": "shopping_site_tryon",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/shopping_site_tryon/extra_img_1.png",
    "extra_images": [],
    "extra_videos": [],
    "description": "Virtual trying on Garments from URL on Target Image - antibloch/shopping_site_tryon",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Clothing extraction + diffusion try-on",
    "url": "https://github.com/superdianuj/shopping_site_tryon"
  },
  {
    "title": "fisheye2rectangular",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/fisheye2rectangular/extra_img_1.gif",
    "extra_images": [
      "assets/images/projects/fisheye2rectangular/extra_img_2.gif"
    ],
    "extra_videos": [],
    "description": "Fisheye conversion",
    "overview": "",
    "tech_stack": [
      "Python"
    ],
    "features": "Fisheye to equirectangular projection",
    "url": "https://github.com/superdianuj/fisheye2rectangular"
  },
  {
    "title": "img_histo",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/img_histo/extra_img_1.png",
    "extra_images": [],
    "extra_videos": [],
    "description": "Creating different kind of histograms from images or set of images - antibloch/img_histo",
    "overview": "",
    "tech_stack": [
      "Python"
    ],
    "features": "Grayscale, RGB, HSV visualization",
    "url": "https://github.com/superdianuj/img_histo"
  },
  {
    "title": "tumor_classification_segmentation",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/tumor_classification_segmentation/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/tumor_classification_segmentation/extra_img_2.png",
      "assets/images/projects/tumor_classification_segmentation/extra_img_3.png",
      "assets/images/projects/tumor_classification_segmentation/extra_img_4.png",
      "assets/images/projects/tumor_classification_segmentation/extra_img_5.png",
      "assets/images/projects/tumor_classification_segmentation/extra_img_6.png",
      "assets/images/projects/tumor_classification_segmentation/extra_img_7.png",
      "assets/images/projects/tumor_classification_segmentation/extra_img_8.png",
      "assets/images/projects/tumor_classification_segmentation/extra_img_9.png"
    ],
    "extra_videos": [],
    "description": "MRI brain tumor classification and segmentation via ViT and U-Net respectively - antibloch/tumor_classification_segmentation",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "CNN/U-Net for MRI classification/segmentation",
    "url": "https://github.com/dianujizer/tumor_classification_segmentation"
  },
  {
    "title": "experiment_over_unet",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/experiment_over_unet/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/experiment_over_unet/extra_img_2.png",
      "assets/images/projects/experiment_over_unet/extra_img_3.png",
      "assets/images/projects/experiment_over_unet/extra_img_4.png",
      "assets/images/projects/experiment_over_unet/extra_img_5.png",
      "assets/images/projects/experiment_over_unet/extra_img_6.png",
      "assets/images/projects/experiment_over_unet/extra_img_7.png"
    ],
    "extra_videos": [],
    "description": "Applying image processing transforms over input 2D MRI slices to observe performance of UNet - antibloch/experiment_over_unet",
    "overview": "I perform experimentations over application of different image processing operations on inputs to U-Net to observe variation in performance. Also, for inlusion of different operations as different modalities, I perform small variation in architecture of U-Net with basic binary crossentropy loss.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Image processing technique evaluation",
    "url": "https://github.com/dianujizer/experiment_over_unet"
  },
  {
    "title": "MRI_condensation",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/MRI_condensation/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/MRI_condensation/extra_img_2.png",
      "assets/images/projects/MRI_condensation/extra_img_3.png"
    ],
    "extra_videos": [],
    "description": "Dataset Condensation Via Distribution Matching of MRI dataset - antibloch/MRI_condensation",
    "overview": "In this repo, I perform dataset condensation via distrbution matching ( https://github.com/VICO-UoE/DatasetCondensation ), without differentiable siamese augmentation, on MRI classification dataset ( https://www.kaggle.com/datasets/sartajbhuvaji/brain-tumor-classification-mri )",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Condensation applied to medical imaging",
    "url": "https://github.com/dianujizer/MRI_condensation"
  },
  {
    "title": "Graph_Image_Segment_Implementations",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/Graph_Image_Segment_Implementations/extra_img_1.png",
    "extra_images": [],
    "extra_videos": [],
    "description": "Python implementations of \"Efficient Graph-Based Image Segmentation\" paper written by P. Felzenszwalb, D. Huttenlocher. - antibloch/Graph_Image_Segment_Implementations",
    "overview": "Python implementations of \"Efficient Graph-Based Image Segmentation\" paper written by P. Felzenszwalb, D. Huttenlocher.",
    "tech_stack": [
      "Python"
    ],
    "features": "Graph cuts, spectral clustering for MRI",
    "url": "https://github.com/dianujizer/Graph_Image_Segment_Implementations"
  },
  {
    "title": "integrated_gradient_spectrogram_Xception",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/integrated_gradient_spectrogram_Xception/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Integrated Gradient based Xception interpretability with test image as spectrogram - antibloch/integrated_gradient_spectrogram_Xception",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Integrated Gradients for spectrogram models",
    "url": "https://github.com/dianujer/integrated_gradient_spectrogram_Xception"
  },
  {
    "title": "violonist_assistant",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/violonist_assistant/og_image.jpg",
    "extra_images": [],
    "extra_videos": [
      "assets/images/projects/violonist_assistant/extra_vid_1.mp4"
    ],
    "description": "This repo contains OpenCV application to a violinist practice assistant - antibloch/violonist_assistant",
    "overview": "Using opencv's pose estimation to assist a violinist analysing his/her body pattern. This is just a practice concept. A demo is shown as follows, which is based on practice video of a violinist from youtube.",
    "tech_stack": [
      "OpenCV"
    ],
    "features": "Bow/finger position tracking",
    "url": "https://github.com/dianujer/violonist_assistant"
  },
  {
    "title": "detectron2_image_objectdetection",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/detectron2_image_objectdetection/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "detectron2 based object detection.",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Custom dataset object detection",
    "url": "https://github.com/dianujer/detectron2_image_objectdetection"
  },
  {
    "title": "image_processing_course_work",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/image_processing_course_work/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "my course work in image processing course.",
    "overview": "",
    "tech_stack": [
      "Python"
    ],
    "features": "Filtering, edge detection, morphology",
    "url": "https://github.com/dianujer/image_processing_course_work"
  },
  {
    "title": "binary_edge_smoother",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/binary_edge_smoother/extra_img_1.jpg",
    "extra_images": [
      "assets/images/projects/binary_edge_smoother/extra_img_2.png"
    ],
    "extra_videos": [],
    "description": "smoothen edges of a binary image using standard image processing pipeline - antibloch/binary_edge_smoother",
    "overview": "",
    "tech_stack": [
      "Python"
    ],
    "features": "Edge smoothing algorithms",
    "url": "https://github.com/dianujer/binary_edge_smoother"
  },
  {
    "title": "urban_sound_alexent_architecture_classification",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/urban_sound_alexent_architecture_classification/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "urban sound classification using spectrogram and alexnet - antibloch/urban_sound_alexent_architecture_classification",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Spectrogram CNN classification",
    "url": "https://github.com/dianujer/urban_sound_alexent_architecture_classification"
  },
  {
    "title": "mnist_denoising_autoencoder",
    "category": "cv",
    "categoryName": "Computer Vision",
    "image": "assets/images/projects/mnist_denoising_autoencoder/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "autoencoder based image denoising.",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Autoencoder for noise removal",
    "url": "https://github.com/dianujer/mnist_denoising_autoencoder"
  },
  {
    "title": "donor_agent",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/donor_agent/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/donor_agent/extra_img_2.png"
    ],
    "extra_videos": [],
    "description": "Donor assistance agent",
    "overview": "Prerequisite: Ensure Docker Desktop is installed and running. Open\nPowerShell or Command Prompt in the folder containing the .tar file. \n\nRun the Agent:\ndocker run -it -e NVIDIA_API_KEY=\"paste_your_key_here\" --name my_donor_agent updated_agent_image",
    "tech_stack": [
      "LangGraph",
      "FastAPI",
      "NVIDIA NIM"
    ],
    "features": "Multi-node pipeline: planner \u2192 validator \u2192 executor \u2192 gate \u2192 responder",
    "url": "https://github.com/antibloch/donor_agent"
  },
  {
    "title": "ai_agent",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/ai_agent/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "LLM agent patterns",
    "overview": "",
    "tech_stack": [
      "LangGraph",
      "LangChain",
      "MCP"
    ],
    "features": "ReAct, Tree-of-Thought, Reflexion, planner-validator-executor patterns",
    "url": "https://github.com/antibloch/ai_agent"
  },
  {
    "title": "doc_qa_project",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/doc_qa_project/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/doc_qa_project/extra_img_2.png"
    ],
    "extra_videos": [],
    "description": "This repo implements a QA answering system from a given document as RAG, wrapped in FLASK api - antibloch/doc_qa_project",
    "overview": "This is a Flask-based Document Question Answering API built for a coding assessment.\nIt supports document ingestion, semantic search, and QA generation using LangChain, FAISS, and NVIDIA NIM endpoints. \n\nThis API successfully fulfills all core requirements and several bonus objectives outlined in the assessment.",
    "tech_stack": [
      "LangChain",
      "FAISS",
      "NVIDIA-NIM",
      "Flask"
    ],
    "features": "RAG",
    "url": "https://github.com/antibloch/doc_qa_project"
  },
  {
    "title": "llm_finetuning",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/llm_finetuning/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Study repo: Fine-tuning LLMS using Unsloth, Huggingface and LitGPT - antibloch/llm_finetuning",
    "overview": "",
    "tech_stack": [
      "PyTorch",
      "TRL",
      "Unsloth",
      "Axolotl"
    ],
    "features": "Full-parameter and LoRA fine-tuning (Llama, etc.)",
    "url": "https://github.com/antibloch/llm_finetuning"
  },
  {
    "title": "ml_reviewer",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/ml_reviewer/extra_img_1.png",
    "extra_images": [],
    "extra_videos": [],
    "description": "smolagent based small reviewer of ML literature that find important information in a ML topic and saves as pdf - antibloch/ml_reviewer",
    "overview": "ML Reviewer leverages Hugging Face's smolagents framework to automatically construct a review report of state\u2010of\u2010the\u2010art (SOTA) research (as a pdf file) in a specified machine learning topic. The report highlights the following categories for each paper:",
    "tech_stack": [
      "Python",
      "OpenAI",
      "HF"
    ],
    "features": "Paper search/summarization with SmolAgents",
    "url": "https://github.com/antibloch/ml_reviewer"
  },
  {
    "title": "donor_readiness",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/donor_readiness/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Donor readiness prediction",
    "overview": "This repository trains donor-readiness models from donation_list.xlsx using a slice-based time-series formulation. \n\n--horizon-days Meaning: future prediction window.\nExample: 30 means predict whether the user donates within the next 30 days after the anchor date.",
    "tech_stack": [
      "PyTorch",
      "scikit-learn",
      "XGBoost"
    ],
    "features": "Time-series feature engineering; LSTM, Transformer, XGBoost classifiers",
    "url": "https://github.com/antibloch/donor_readiness"
  },
  {
    "title": "donor_readiness_scorer",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/donor_readiness_scorer/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Donor scoring Streamlit app",
    "overview": "",
    "tech_stack": [
      "Streamlit",
      "ONNX Runtime"
    ],
    "features": "ONNX inference UI for donation probability",
    "url": "https://github.com/antibloch/donor_readiness_scorer"
  },
  {
    "title": "text_signal_classification",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/text_signal_classification/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/text_signal_classification/extra_img_2.png",
      "assets/images/projects/text_signal_classification/extra_img_3.png",
      "assets/images/projects/text_signal_classification/extra_img_4.png",
      "assets/images/projects/text_signal_classification/extra_img_5.png",
      "assets/images/projects/text_signal_classification/extra_img_6.png"
    ],
    "extra_videos": [],
    "description": "Cyberbully text classification using signal features, competitive to pretrained BERT embeddings and its variants - antibloch/text_signal_classification",
    "overview": "",
    "tech_stack": [
      "TensorFlow",
      "Librosa"
    ],
    "features": "Fourier-domain text representation; WaveNet, Conv1D for cyberbully detection",
    "url": "https://github.com/superdianuj/text_signal_classification"
  },
  {
    "title": "text_summarization",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/text_summarization/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "This repo is the reference tensorflow and pytorch text summarization using basic encoder-decoder architecture - antibloch/text_summarization",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Extractive and abstractive (BART, T5)",
    "url": "https://github.com/dianujer/text_summarization"
  },
  {
    "title": "toxity_ranker",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/toxity_ranker/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "This repo involves creating dataset for toxity ranking, and ranking the datat using a LightGBM model - antibloch/toxity_ranker",
    "overview": "First the dataset for learning embeddings of the textual data in \"toxity_data.csv\" is created from \"create_dataset\". \n\nSecond, the embedddings of the text are learned from \"transfer_learning_text\" in a transfer learned manner.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Jigsaw-trained toxicity models",
    "url": "https://github.com/dianujer/toxity_ranker"
  },
  {
    "title": "Bert_sentiment_classification",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/Bert_sentiment_classification/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Pretrained-BERT based sentiment classifcation.",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "BERT/RoBERTa fine-tuning",
    "url": "https://github.com/dianujer/Bert_sentiment_classification"
  },
  {
    "title": "Gingerit_Plagarism_Remover",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/Gingerit_Plagarism_Remover/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "A methodology to remove plagarism from a given text - antibloch/Gingerit_Plagarism_Remover",
    "overview": "",
    "tech_stack": [
      "Python"
    ],
    "features": "Gingerit wrapper for paraphrasing",
    "url": "https://github.com/dianujer/Gingerit_Plagarism_Remover"
  },
  {
    "title": "BERT_CoLA",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/BERT_CoLA/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "BERT model for classification of grammatical correctness of CoLA dataset - antibloch/BERT_CoLA",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "BERT on CoLA dataset",
    "url": "https://github.com/dianujer/BERT_CoLA"
  },
  {
    "title": "Text_Modelling_NMF_Text_Classification_RNN",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/Text_Modelling_NMF_Text_Classification_RNN/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "Text Modelling based on Non-negative matrix factorization. Text classification based on RNN - antibloch/Text_Modelling_NMF_Text_Classification_RNN",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "NMF and RNN for text classification",
    "url": "https://github.com/dianujer/Text_Modelling_NMF_Text_Classification_RNN"
  },
  {
    "title": "journal_finder",
    "category": "nlp",
    "categoryName": "LLMs and AI Agents",
    "image": "assets/images/projects/journal_finder/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "This repo implements finding histogram of journal from reference bibtex file, which can be insightful for finding journal for submission - antibloch/journal_finder",
    "overview": "This ipynb file, mainly, is meant to use the bibtex file (filled with all references), and find a histogram of journal distribution to find recommendations of journal that should reside in the standard deviation of the Gaussian curve.",
    "tech_stack": [
      "Python"
    ],
    "features": "BibTeX keyword-based journal matching",
    "url": "https://github.com/dianujer/journal_finder"
  },
  {
    "title": "protein_sequence_classification",
    "category": "brain",
    "categoryName": "Chemical & Brain Analysis",
    "image": "assets/images/projects/protein_sequence_classification/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/protein_sequence_classification/extra_img_2.png",
      "assets/images/projects/protein_sequence_classification/extra_img_3.png",
      "assets/images/projects/protein_sequence_classification/extra_img_4.png"
    ],
    "extra_videos": [],
    "description": "A small study on protein-protein interaction classification - antibloch/protein_sequence_classification",
    "overview": "Dataset source: https://thebiogrid.org/77183/publication/a-human-protein-protein-interaction-network-a-resource-for-annotating-the-proteome.html \n\nEither using identifier ID (Case-1) or gene names (Case-2) of protein A and protein B, to determine the interaction type. In this course, I considered a study of employing MLP for finding the performance over Case-1 and Case-2. Furthermore, I also employ a possible new approach to feed the temporal information surrounding individual points to study the peroformance over case-2 into a MLP classifier.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "LSTM/CNN on amino-acid sequences",
    "url": "https://github.com/dianujer/protein_sequence_classification"
  },
  {
    "title": "SMILES_classification",
    "category": "brain",
    "categoryName": "Chemical & Brain Analysis",
    "image": "assets/images/projects/SMILES_classification/extra_img_1.png",
    "extra_images": [],
    "extra_videos": [],
    "description": "SMILES string classification via transformer architecture vs finetuning of ChemBERTa - antibloch/SMILES_classification",
    "overview": "Classification of SMILE strings via finetuning of ChemBERTa (pretrained on large corpus of 100k SMILES strings from a commonly known benchmark dataset, ZINC), and training a simple transformer based architecture.",
    "tech_stack": [
      "PyTorch",
      "RDKit"
    ],
    "features": "SMILES string classification",
    "url": "https://github.com/dianujizer/SMILES_classification"
  },
  {
    "title": "SSA_implementations",
    "category": "brain",
    "categoryName": "Chemical & Brain Analysis",
    "image": "assets/images/projects/SSA_implementations/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "This repo contains python based implementations of SSA, as part of my study - antibloch/SSA_implementations",
    "overview": "",
    "tech_stack": [
      "Python"
    ],
    "features": "Singular Spectrum Analysis for brain imaging",
    "url": "https://github.com/dianujer/SSA_implementations"
  },
  {
    "title": "mne_EEG_visual",
    "category": "brain",
    "categoryName": "Chemical & Brain Analysis",
    "image": "assets/images/projects/mne_EEG_visual/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "This repo contains EEG visualization of neural activity, as part of my study - antibloch/mne_EEG_visual",
    "overview": "",
    "tech_stack": [
      "Python",
      "MNE"
    ],
    "features": "MNE-based EEG plotting",
    "url": "https://github.com/dianujer/mne_EEG_visual"
  },
  {
    "title": "Structural_connectivity_network_GAN",
    "category": "brain",
    "categoryName": "Chemical & Brain Analysis",
    "image": "assets/images/projects/Structural_connectivity_network_GAN/extra_img_1.gif",
    "extra_images": [],
    "extra_videos": [],
    "description": "This repository generates variations of structural connectivity matrixes using sparse original structural connectivty matrix data for to be later used for training by models for classification task...",
    "overview": "This repository generates variations of structural connectivity matrixes using sparse original structural connectivty matrix data for to be later used for training by models for classification task.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "GAN for structural connectivity matrices",
    "url": "https://github.com/dianujer/Structural_connectivity_network_GAN"
  },
  {
    "title": "sparse_learning_novice_pro_accelerometer_classification",
    "category": "misc",
    "categoryName": "Accelerometer, COVID-19 & Misc ML",
    "image": "assets/images/projects/sparse_learning_novice_pro_accelerometer_classification/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "sparse learning based accelerometer data classification of novic-pro character of gym trainee - antibloch/sparse_learning_novice_pro_accelerometer_classification",
    "overview": "Accelerometer signals along x direction from sample novice and professional gym trainee's bicep sessions were converted into spectrograms. The images of spectrogram images are flattened into vectors, as represented by MATLAB Data files.\nRest follows",
    "tech_stack": [
      "PyTorch",
      "TensorFlow"
    ],
    "features": "Sparse learning, compressed sensing, HAR on spectrograms",
    "url": "https://github.com/dianujer/sparse_learning_novice_pro_accelerometer_classification"
  },
  {
    "title": "comparment_model_identification",
    "category": "misc",
    "categoryName": "Accelerometer, COVID-19 & Misc ML",
    "image": "assets/images/projects/comparment_model_identification/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/comparment_model_identification/extra_img_2.gif"
    ],
    "extra_videos": [],
    "description": "This repo is regarding compartment model identification using SINDy based approach - antibloch/comparment_model_identification",
    "overview": "This work is intended to identify the compartment model (which are prone to interpretations), instead of differential system (which may be hard to interpret), given a bunch of data.\nThe data considered was infact epidemic number data in South Korea, taken from https://sites.google.com/view/snuaric/data-service/covid-19/covid-19-data?authuser=0 .\nNext, while for identification of non-linear differential system, reminiscent of methods like SINDy, we need to calculate the derivative.\nInstead of doing that, we can use Fourier transform to nullify the treatment of any derivative, and produce a rather simple objective function with a parameters.\nThis objective function can be easily expandible into minimization of L1 norm of a vector x, subjected to Ax=B.\nIn this way, we can get the underlying differential system with simple components that can be back traced towards a compartment model. The main idea can be summarized as follows \n\nFor the case of demo, the data is divided into 50 days interval to model only confirmed and recovered case daily numbers, and in this way the corresponding dynamics of the pandemic (represented by compartment model)\nevolve over time, contrary to a typical variable parameter system approach.\nThe corresponding demo is shown here",
    "tech_stack": [
      "Python"
    ],
    "features": "SINDy, SIQRD/SEQHIRD/SVEQIHRD models, symptom classification",
    "url": "https://github.com/dianujer/comparment_model_identification"
  },
  {
    "title": "SMI_amplitude_esim",
    "category": "misc",
    "categoryName": "Accelerometer, COVID-19 & Misc ML",
    "image": "assets/images/projects/SMI_amplitude_esim/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/SMI_amplitude_esim/extra_img_2.png",
      "assets/images/projects/SMI_amplitude_esim/extra_img_3.png",
      "assets/images/projects/SMI_amplitude_esim/extra_img_4.png"
    ],
    "extra_videos": [],
    "description": "Keras implementation of identifying frquency and amplitude of displacement using self mixing interferometric signals - antibloch/SMI_amplitude_esim",
    "overview": "Keras implementation of identifying frquency and amplitude of displacement using self mixing interferometric (SMI) signals. The theme of this project can be shown as follows, where the arrow is to be approximated by some neural network. \n\nIn this repo, I constructed several deep learning architectures to map simulated self-mixing interferometric power signals to frequency and amplitude of the virating target. These architecture have 1D and 2D input topology. For 1D input topology the raw power signals are influxed into the model, but for the 2D case, the STFT spectrogram of the signal is used to convert the power signals in 2D format, as depicted below.",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "Self-Mixing Interferometry displacement estimation",
    "url": "https://github.com/dianujizer/SMI_amplitude_esim"
  },
  {
    "title": "music_genre_cnn_lstm",
    "category": "misc",
    "categoryName": "Accelerometer, COVID-19 & Misc ML",
    "image": "assets/images/projects/music_genre_cnn_lstm/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "music genre classification using cnn-lstm.",
    "overview": "",
    "tech_stack": [
      "PyTorch"
    ],
    "features": "CNN-LSTM on audio spectrograms",
    "url": "https://github.com/dianujer/music_genre_cnn_lstm"
  },
  {
    "title": "AppCOVIDv1",
    "category": "apps",
    "categoryName": "App & Web Development",
    "image": "assets/images/projects/AppCOVIDv1/extra_img_1.png",
    "extra_images": [
      "assets/images/projects/AppCOVIDv1/extra_img_2.png"
    ],
    "extra_videos": [
      "assets/images/projects/AppCOVIDv1/extra_vid_1.mp4",
      "assets/images/projects/AppCOVIDv1/extra_vid_2.mp4",
      "assets/images/projects/AppCOVIDv1/extra_vid_3.mp4",
      "assets/images/projects/AppCOVIDv1/extra_vid_4.mp4",
      "assets/images/projects/AppCOVIDv1/extra_vid_5.mp4"
    ],
    "description": "This repo is a progress flutter project for contact tracing app, as part of KAU, CCR Lab project - antibloch/AppCOVIDv1",
    "overview": "This app can track Covid patient in real time and record his activities in database.\nIt can inform other people whether they interacted with covid patient in the last 14 days or not.",
    "tech_stack": [
      "Flutter",
      "Dart"
    ],
    "features": "Bluetooth beacon proximity, GPS logging, background upload",
    "url": "https://github.com/antibloch/AppCOVIDv1"
  },
  {
    "title": "CovidTrackerApp-Web_simple_GUI_login_register_send_emails",
    "category": "apps",
    "categoryName": "App & Web Development",
    "image": "assets/images/projects/CovidTrackerApp-Web_simple_GUI_login_register_send_emails/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "nodejs and html absed web app with GUI for login, register and can send emails (for OTP verification) - antibloch/CovidTrackerApp-Web_simple_GUI_login_register_send_emails",
    "overview": "",
    "tech_stack": [
      "Node.js",
      "Express"
    ],
    "features": "Dashboard, D3.js visualizations, GPS privacy APIs",
    "url": "https://github.com/superdianuj/CovidTrackerApp-Web_simple_GUI_login_register_send_emails"
  },
  {
    "title": "create_flowchart",
    "category": "apps",
    "categoryName": "App & Web Development",
    "image": "assets/images/projects/create_flowchart/og_image.jpg",
    "extra_images": [],
    "extra_videos": [],
    "description": "flutter project that shows a directed graph show which places the person has been in contact with - antibloch/create_flowchart",
    "overview": "",
    "tech_stack": [
      "Flutter"
    ],
    "features": "Flowchart creation, background GPS, BLE beacon handling",
    "url": "https://github.com/dianujer/create_flowchart"
  }
];
