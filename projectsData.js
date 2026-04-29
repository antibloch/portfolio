const PROJECTS_DATA = [
  {
    "title": "mia_attacks",
    "category": "privacy",
    "categoryName": "ML Privacy & Security",
    "image": "https://opengraph.githubassets.com/322e5287df6152150644d14d3c9195e150e498a7a00b422e051c507f98ce3cf0/antibloch/mia_attacks",
    "extra_images": [
      "https://github.com/antibloch/mia_attacks/raw/main/results/ROC_BaselineAttack_conf.png",
      "https://github.com/antibloch/mia_attacks/raw/main/results/ROC_BaselineAttack_loss.png",
      "https://github.com/antibloch/mia_attacks/raw/main/results/ROC_BaselineAttack_prob.png",
      "https://github.com/antibloch/mia_attacks/raw/main/results/ROC_LIRAAttack.png",
      "https://github.com/antibloch/mia_attacks/raw/main/results/ROC_QuantileAttack.png",
      "https://github.com/antibloch/mia_attacks/raw/main/results/ROC_RMIA.png",
      "https://github.com/antibloch/mia_attacks/raw/main/results/ROC_Shadow.png"
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
    "image": "https://opengraph.githubassets.com/f2a9d4f3cfd415e3382296a1115dcbea4395023734f9ee12a31b5c97f8635ec2/algebraicdianuj/DC_U",
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
    "image": "https://opengraph.githubassets.com/78b8f78e4d846e918384bd1a2176a31de5769fccab89fb9431af34885784e426/algebraicdianuj/DC_Unlearning",
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
    "image": "https://opengraph.githubassets.com/441def9cc5932b6eb4f4da6be1332fb1ff29a2e6ce5d3e0c8f8fd2faf97f9194/antibloch/ambitious_explorations_privacyattacks",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/233863325-1a80debb-dfce-4502-862c-6f9dffda66d5.png",
      "https://user-images.githubusercontent.com/47445756/233847698-ad868570-f022-467a-8a16-73fe7cfc61cb.png",
      "https://user-images.githubusercontent.com/47445756/233847720-b2982af8-9598-428d-b1b6-456d209234a6.png",
      "https://user-images.githubusercontent.com/47445756/233847728-d70e716d-13d6-42a0-9636-44a8940a97ea.png",
      "https://user-images.githubusercontent.com/47445756/233847736-63141ba6-281b-4244-8b17-a490c160f9dc.png",
      "https://user-images.githubusercontent.com/47445756/233847750-e736c54f-2b3c-4f31-b420-a6d72828798c.png",
      "https://user-images.githubusercontent.com/47445756/233847754-b091acbf-e97e-45c5-83bf-d17605c697a7.png",
      "https://user-images.githubusercontent.com/47445756/233847769-0c862428-feef-4862-9926-3effbd867035.png",
      "https://user-images.githubusercontent.com/47445756/233847807-dc102579-0aa2-4730-acf7-2fd1da1bf0c2.png",
      "https://user-images.githubusercontent.com/47445756/233847825-74cb7941-0f5f-417a-9a29-4ab347e2d8a9.png",
      "https://user-images.githubusercontent.com/47445756/233848003-f8c65286-ecaf-4efe-86c6-c3df02a3d7fe.png",
      "https://user-images.githubusercontent.com/47445756/233848020-c1ecbc85-d02c-42b2-8522-3dffd3574bf3.png",
      "https://user-images.githubusercontent.com/47445756/233848037-fa7e7b08-1dfa-4f55-95a9-76fc38a4884e.png",
      "https://user-images.githubusercontent.com/47445756/233848050-9165f814-1599-4aae-8228-a45ad0f76110.png",
      "https://user-images.githubusercontent.com/47445756/233848057-a4006c12-d0eb-4b9e-8819-86a4957f545c.png"
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
    "image": "https://opengraph.githubassets.com/61607a256437ae828f8a18966d3ec83c2c90ec221dd4a3e8ec2f20124d58d901/antibloch/explorations_over_privacyattacks",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/233845207-1aac9e7e-e21d-4fa5-bc18-28ff294bec0e.png",
      "https://user-images.githubusercontent.com/47445756/233845802-25650132-c4f0-4bd6-86a5-dda931fcc923.png",
      "https://user-images.githubusercontent.com/47445756/233845263-94e0d5f6-b146-4545-9849-97f686f1d8b7.png",
      "https://user-images.githubusercontent.com/47445756/233845407-2c7a6305-32c0-43b0-b663-fe9432950412.png",
      "https://user-images.githubusercontent.com/47445756/233845442-54389f11-2c5f-4f43-b221-9ba2febb6f32.png",
      "https://user-images.githubusercontent.com/47445756/233845485-dfbbc625-f3b5-4a43-9625-cd310861db91.png",
      "https://user-images.githubusercontent.com/47445756/233845698-0d99288a-4e7f-4b06-acba-1e51f6bc4c02.png",
      "https://user-images.githubusercontent.com/47445756/233845731-06d4b1ed-4490-41cc-a8f8-640d19f54443.png"
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
    "image": "https://opengraph.githubassets.com/a6776a329233b3735a78c680db6461d268ba1d7e53a9542008264f776a6bab5d/antibloch/poisoned_output_detection",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/231297814-a217fca0-71af-498c-8990-29d725f10ff5.png",
      "https://user-images.githubusercontent.com/47445756/231302136-8c53ba91-81e5-4e5d-a1f5-8f58df8dc4f7.png",
      "https://user-images.githubusercontent.com/47445756/231301494-8f356b8f-048b-4f97-9885-8883c61e0dd1.png"
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
    "image": "https://opengraph.githubassets.com/29d24b29f5ca934b84fba87287980200a965f42473d4ba2ee60f807fbb37700d/antibloch/data_driven_attack_encryptedmodel",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/233842611-6713c960-f754-4018-a3e8-aea599637084.png",
      "https://user-images.githubusercontent.com/47445756/233842834-68f2252d-8250-4390-9f4d-2ea0ff08f84e.png",
      "https://user-images.githubusercontent.com/47445756/233843449-989b9cad-198f-4195-a093-e36d392b6ea4.png",
      "https://user-images.githubusercontent.com/47445756/233844871-ab28be11-5ec7-482c-b627-aea7f8fad3aa.png",
      "https://user-images.githubusercontent.com/47445756/233843720-33b75e0a-3eb5-4388-bd4f-c70f1d7f8bce.png",
      "https://user-images.githubusercontent.com/47445756/233844040-84532787-05e2-4617-a551-fd45776b1d3a.png",
      "https://user-images.githubusercontent.com/47445756/233843980-40679a10-e758-48c1-b3cc-7ecd61189400.png",
      "https://user-images.githubusercontent.com/47445756/233844152-78d9a5c5-3141-4a4c-84bd-167bf59ae1a7.png",
      "https://user-images.githubusercontent.com/47445756/233844320-6886c8ee-f095-4337-9ece-ce2fe56dddbf.png",
      "https://user-images.githubusercontent.com/47445756/233844349-d2f13377-8223-49c9-a9ed-caa9324abafe.png"
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
    "image": "https://opengraph.githubassets.com/348f30b1e07a66d8e727459c5cf6dc20ebda147f476de593c2f1a90e96886525/antibloch/entropy_driven_MIA_defenses",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/233807327-0cd0380f-0c22-40a9-87d1-f3218bcd7063.png",
      "https://user-images.githubusercontent.com/47445756/233807521-de27f7f7-82a3-46e6-b7fd-1739201effe4.png",
      "https://user-images.githubusercontent.com/47445756/233807633-fedbf800-ee7f-4389-9f68-da584d6d0cb8.png",
      "https://user-images.githubusercontent.com/47445756/233807766-4dbf4568-83db-47a3-a258-ca9bdd5631c4.png",
      "https://user-images.githubusercontent.com/47445756/233807898-2804eb9c-8af6-4c6b-90e3-7617bfd9c48c.png",
      "https://user-images.githubusercontent.com/47445756/233807990-56230a3d-b21c-4cf6-9183-5918b66a05ba.png",
      "https://user-images.githubusercontent.com/47445756/233808070-f8e2f87c-9423-4f69-a2e8-543cc4bc4eb9.png"
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
    "image": "https://opengraph.githubassets.com/9e53e7b2a78f4ce5880a1e2054aae64b6ac1129c2438e1d975a291e141a9b829/antibloch/cache_trace_analysis",
    "extra_images": [
      "https://github.com/antibloch/cache_trace_analysis/raw/main/procedure_of_inference.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/leakage_detection_pipeline.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/Grouping.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/variable_grouping_pipeline.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/correlation_matrices.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/accuracy_vs_partition.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/classification_pipeline.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/dataset_overview.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/leakage_detection.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/1d_2d_comparison.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/confusion_matrices.png",
      "https://github.com/antibloch/cache_trace_analysis/raw/main/confusion_matrices2.png"
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
    "image": "https://opengraph.githubassets.com/d0921ac59e766754a2c33931992b60303609d53ffde9190eb873be8e8a15469b/antibloch/machine_unlearning",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/233808862-8f8ac98e-6534-4c17-a89b-8a57fd52b368.png",
      "https://user-images.githubusercontent.com/47445756/233808532-f341ebc2-cd8f-4817-a3c9-cc453e174e2f.png",
      "https://user-images.githubusercontent.com/47445756/233808595-3c89b08c-9321-4ae6-ad7c-9c8514f1740b.png",
      "https://user-images.githubusercontent.com/47445756/233808789-991994f7-9f88-498e-b8ac-748b2cfef86a.png"
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
    "image": "https://opengraph.githubassets.com/5a4190a87ff23d48d5bc49560fa0af1bd871aa1e78daab59a602c1fe0143e91d/antibloch/faulty_honey_encryption",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/230747195-07da6cbc-aa0b-49da-99b5-bc512f14f48e.png",
      "https://user-images.githubusercontent.com/47445756/230747356-466bfaf5-fc46-4410-8eef-442f8ee13a7d.png",
      "https://user-images.githubusercontent.com/47445756/230747656-aa02993a-87cf-4ec7-9574-f59987d43e80.png"
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
    "image": "https://opengraph.githubassets.com/5681827536b7be3881080fc6b5fb44f3c06cf85026657144d92dc96fa2e41b3d/antibloch/simple_adversarial_attack",
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
    "image": "https://opengraph.githubassets.com/199ac3233ec3a899f423f399e3eb13e32d76240762237195f485378cbe401979/antibloch/simple_data_poisoning",
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
    "image": "https://opengraph.githubassets.com/9f127032012681230d2e233fdb14e9321ce39f66630a5e543c4884548238f354/antibloch/literature_secure_inference_edge",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/233863861-60146086-d3eb-4e6d-ad2b-44d39658ac67.png",
      "https://user-images.githubusercontent.com/47445756/233863410-e4f69772-9080-4a62-a79e-9c2677ce7a9e.png",
      "https://user-images.githubusercontent.com/47445756/233863421-8edf9a0c-2b01-490c-97db-72b86f428cc0.png",
      "https://user-images.githubusercontent.com/47445756/233864378-89ecdb66-b243-40c4-8734-3bb358b85f67.png",
      "https://user-images.githubusercontent.com/47445756/233864396-02af308c-f70c-43ef-860e-c87e326ef4e2.png"
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
    "image": "https://opengraph.githubassets.com/55f600d00d0be8da5ca53fa23013d99606bc5a26f94107c583ad812977183edd/antibloch/ML_privacy_links",
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
    "image": "https://opengraph.githubassets.com/af8a4da2d3619e52e929c67dcbee6834ef6d492298fbdb6f6c0db16db6c4267c/antibloch/vital_signs_instrument_project_j",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/189482335-ecb69b67-5282-402b-89de-fa624ecdc8cf.png",
      "https://user-images.githubusercontent.com/47445756/189482345-42dc5205-8873-4c0d-a802-9330b4ee4eac.png",
      "https://user-images.githubusercontent.com/47445756/189482367-0ec0985c-0597-4574-ab69-bfaf3e52761b.png",
      "https://user-images.githubusercontent.com/47445756/189482452-7cd9d83d-85c6-4413-95ab-1fc5759e92a0.png",
      "https://user-images.githubusercontent.com/47445756/189482463-cd7ec2db-b2d8-4b48-b2dc-888c21128c6d.png"
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
    "image": "https://opengraph.githubassets.com/5130f81d7224582d5947cab65af2f6fd5b3d7cde9ed9f8ad820a248f6dd5135a/antibloch/p5_conceptual_simul_of_radar_j",
    "extra_images": [],
    "extra_videos": [],
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
    "image": "https://opengraph.githubassets.com/6d0fd63db0d51f68f62284e51d79ca25b36909d78dff95fee8cc2583669e3602/antibloch/HR_BR_Radar_ECG_j",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/173699882-6acea941-6439-4473-9bbb-696a77f3a62e.png",
      "https://user-images.githubusercontent.com/47445756/173700031-08e5dc05-0642-4627-a447-c241dcd208a6.png",
      "https://user-images.githubusercontent.com/47445756/173700281-449281f4-b24a-4573-89c4-958f38d83816.png",
      "https://user-images.githubusercontent.com/47445756/173700087-a6b5e724-59d3-4b4a-9991-d44bcb6bd6ab.png",
      "https://user-images.githubusercontent.com/47445756/173700102-4c0d87d5-a3e0-4041-a84a-a3da1314373f.png",
      "https://user-images.githubusercontent.com/47445756/173700176-91fce56c-4c80-49e9-8e47-6d56c78c1165.png",
      "https://user-images.githubusercontent.com/47445756/173700200-2bb1be81-8a16-402d-a7ac-1bbc9a90be6f.png"
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
    "image": "https://opengraph.githubassets.com/a68ddc080441c50a3beba7afb9f0470a5bfdb6df20c53843bfd4f06713d8ac12/antibloch/ECG_HeartRate_Methods_j",
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
    "image": "https://opengraph.githubassets.com/71663f5088a8eab7d8bbdb20d26e1dd9b2a477d3eb6bcc0ceb3916b3dbf5c218/antibloch/ECG_BreathingRate_Methods_j",
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
    "image": "https://opengraph.githubassets.com/1a515809888557da49eb5f75a25192989c569888817ff1bf31116b6e142babe4/antibloch/ECG_measurement_system_j",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/189487899-7d9ed7f2-1498-4dbc-8f7a-aa2460e096c3.png",
      "https://user-images.githubusercontent.com/47445756/189487906-c022da3e-9cbc-4aa5-852d-78d6e21da0e9.png"
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
    "image": "https://opengraph.githubassets.com/b9b58bb067a323d00ad1cf7fbfce94ed0ede1702074f95904115574944d5723d/antibloch/InfenionSense2Gol_Vital_signs_j",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/160165386-82d38918-556e-4ce9-a01c-a4e3fd3c9023.png",
      "https://user-images.githubusercontent.com/47445756/160166027-b7cd52a2-eae5-4428-b583-b34e2703beef.png"
    ],
    "extra_videos": [],
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
    "image": "https://opengraph.githubassets.com/bf04bf5efb1ea079765db55fb355b1b282e5cb98042557b2015254a3b1e711ff/antibloch/nerf_synthetic_blur",
    "extra_images": [
      "https://github.com/antibloch/nerf_synthetic_blur/raw/main/main_scheme.png",
      "https://github.com/antibloch/nerf_synthetic_blur/raw/main/image_distribution.png",
      "https://github.com/antibloch/nerf_synthetic_blur/raw/main/Composition_deblurring.png",
      "https://github.com/antibloch/nerf_synthetic_blur/raw/main/performance_comp.png"
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
    "image": "https://opengraph.githubassets.com/c51cf377b1e7ed477d84c61704024ef071dfeed95a28c167e311e40e5eb89e78/antibloch/nerf_real_blur",
    "extra_images": [
      "https://github.com/antibloch/nerf_real_blur/raw/main/main_scheme.png",
      "https://github.com/antibloch/nerf_real_blur/raw/main/motion_blur.png",
      "https://github.com/antibloch/nerf_real_blur/raw/main/lens_blur.png",
      "https://github.com/antibloch/nerf_real_blur/raw/main/nerf_training_time_comparison.png"
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
    "image": "https://opengraph.githubassets.com/55aff24b69fdc28c45825f52d1b79ca448816b502920d499b7aab97d92364102/antibloch/gaussian_splt_blur",
    "extra_images": [
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/main_scheme.png",
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/11.gif",
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/12.gif",
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/13.gif",
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/21.gif",
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/22.gif",
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/23.gif",
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/31.gif",
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/32.gif",
      "https://github.com/antibloch/gaussian_splt_blur/raw/main/33.gif"
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
    "image": "https://opengraph.githubassets.com/efedb13041ffcd9814d4a41dec25e5f5c93eed8a220ca1348ecbcc7491536499/antibloch/imp_gaussian_splatting",
    "extra_images": [
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref/groundtruth_rendering.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref/blur_rendering.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref/nafnet_spsr_rendering.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/ground_truth_gs.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/nafnet_motion.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/nafnet_lens.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/nafnet_gaussian.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/realesrgan_motion.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/realesrgan_lens.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/realesrgan_gaussian.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/badgaussian_motion.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/badgaussian_lens.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/ref_2/badgaussian_gaussian.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/original_gs.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/strategy-1.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/strategy-3.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/bad_gaussian.gif",
      "https://github.com/antibloch/imp_gaussian_splatting/raw/main/some_results/deblur-nerf.gif"
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
    "image": "https://opengraph.githubassets.com/197714a811776c6be5f70f5d7cb13afa0e99414cf886e08e1d73215716febb01/antibloch/improved_SuGaR",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/7d0426c1079ab5718ab2e06f5eb4c781c8ab8196dce220dbb56c04856be171cf/antibloch/gaussian_talker_ablation",
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
    "image": "https://opengraph.githubassets.com/7c2d238ce7f60e7dbaa6f6ce958f3da8af68178e62ce0fe52cbaa4e7ca9aa1e3/antibloch/gaussian-splatting",
    "extra_images": [
      "https://github.com/antibloch/gaussian-splatting/raw/main/assets/version_0.png",
      "https://github.com/antibloch/gaussian-splatting/raw/main/assets/failed_colmap.png",
      "https://github.com/antibloch/gaussian-splatting/raw/main/assets/version2.png",
      "https://github.com/antibloch/gaussian-splatting/raw/main/assets/colmap_nerfstudio.png",
      "https://github.com/antibloch/gaussian-splatting/raw/main/assets/version3_1.png",
      "https://github.com/antibloch/gaussian-splatting/raw/main/assets/version3_2.png",
      "https://github.com/antibloch/gaussian-splatting/raw/main/assets/version3_3.png"
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
    "image": "https://opengraph.githubassets.com/f37f4cbbe9dcc68a9d56ac11a0f0362aece2a1ae7b54e9b254aa6bea356d43b8/antibloch/gaussian_heart",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/a9d99d01393bfd9179960f74df3645e5d5612c37b99e564dc4277f4254d88e18/antibloch/simple_nerf",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/b48b6bab421d8b6d881c28c63f9006b74f6d50cdfad502d4ee314492b612abb4/antibloch/colmap_installation_directs",
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
    "image": "https://opengraph.githubassets.com/c99e553d7e00d89dfdbd66ab9949f71f5fc496594e3ce8a01856974f9a237d14/antibloch/NAFNet",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/a94ebc2da32c18c3b8984645c6c5dadbcb00b5c7204fc7f007249f862f29a4d4/antibloch/SPSR",
    "extra_images": [],
    "extra_videos": [],
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
    "image": "https://opengraph.githubassets.com/da9fef973af3bee43d316d669db29f2bc44e78be9b8b9a6c424d889402ad2bf2/antibloch/HI-Diff",
    "extra_images": [],
    "extra_videos": [],
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
    "image": "https://opengraph.githubassets.com/1ba7a766c6f72bce0e70496dab0595b26c8cfc72c2eba32434b95ca937f762e5/antibloch/Diff-PIR",
    "extra_images": [
      "https://github.com/antibloch/Diff-PIR/raw/main/testsets/motion_blurred.gif",
      "https://github.com/antibloch/Diff-PIR/raw/main/result_motion_blur.gif",
      "https://github.com/antibloch/Diff-PIR/raw/main/testsets/resolution_blurred.gif",
      "https://github.com/antibloch/Diff-PIR/raw/main/result_resolution_blur.gif"
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
    "image": "https://opengraph.githubassets.com/8b64841c938bfef678c9b776341ab473396b92d2076e2190e162d6b68e9b171d/antibloch/DiffBIR",
    "extra_images": [
      "https://github.com/antibloch/DiffBIR/raw/main/assets/logo.png",
      "https://camo.githubusercontent.com/922b7a5519db6b193600a92c7516e3952d5791b961df312063ea6fd1dd39d505/68747470733a2f2f76697369746f722d62616467652e6c616f62692e6963752f62616467653f706167655f69643d58506978656c47726f75702f44696666424952",
      "https://camo.githubusercontent.com/c34c788c5ae7816a085df32587953a6f9ef869b2c7703f913243d0a71fde3bd4/68747470733a2f2f63646e2d7374617469632e6f70656e786c61622e6f72672e636e2f6170702d63656e7465722f6f70656e786c61625f6170702e737667",
      "https://camo.githubusercontent.com/eff96fda6b2e0fff8cdf2978f89d61aa434bb98c00453ae23dd0aab8d1451633/68747470733a2f2f636f6c61622e72657365617263682e676f6f676c652e636f6d2f6173736574732f636f6c61622d62616467652e737667",
      "https://camo.githubusercontent.com/fa82c6f3bdaf298384915166aed925cc7f85b0b35942e3f1daa789da1dfcd874/68747470733a2f2f7265706c69636174652e636f6d2f7a73786b69622f646966666269722f6261646765",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/teaser.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/pipeline.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/visual_results/bsr6.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/visual_results/bsr7.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/visual_results/bsr4.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/visual_results/whole_image1.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/visual_results/whole_image2.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/visual_results/bid1.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/visual_results/bid3.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/visual_results/bid2.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/visual_results/tiled_sampling.png",
      "https://github.com/antibloch/DiffBIR/raw/main/assets/gradio.png"
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
    "image": "https://opengraph.githubassets.com/8a5b51f86a2f987a3362e612ab233ef8dbf549da200f4f81a5c04e39d32f3204/antibloch/ESRGAN",
    "extra_images": [
      "https://github.com/antibloch/ESRGAN/raw/main/assets/realesrgan_logo.png",
      "https://github.com/antibloch/ESRGAN/raw/main/input_imgs/case_study1.png",
      "https://github.com/antibloch/ESRGAN/raw/main/results/case_study1_out.png",
      "https://github.com/antibloch/ESRGAN/raw/main/input_imgs/case_study2.png",
      "https://github.com/antibloch/ESRGAN/raw/main/results/case_study2_out.png",
      "https://github.com/antibloch/ESRGAN/raw/main/input_imgs/case_study3.png",
      "https://github.com/antibloch/ESRGAN/raw/main/results/case_study3_out.png",
      "https://github.com/antibloch/ESRGAN/raw/main/input_imgs/case_study4.png",
      "https://github.com/antibloch/ESRGAN/raw/main/results/case_study4_out.png",
      "https://github.com/antibloch/ESRGAN/raw/main/input_imgs/case_study5.png",
      "https://github.com/antibloch/ESRGAN/raw/main/results/case_study5_out.png",
      "https://github.com/antibloch/ESRGAN/raw/main/input_imgs/case_study6.png",
      "https://github.com/antibloch/ESRGAN/raw/main/results/case_study6_out.png",
      "https://github.com/antibloch/ESRGAN/raw/main/dataset_motion_blurred.gif",
      "https://github.com/antibloch/ESRGAN/raw/main/dataset_motion_blurred_out.gif",
      "https://github.com/antibloch/ESRGAN/raw/main/dataset_resolution_blurred.gif",
      "https://github.com/antibloch/ESRGAN/raw/main/dataset_resolution_blurred_out.gif"
    ],
    "extra_videos": [],
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
    "image": "https://opengraph.githubassets.com/41527c656e746a2282b6c1dd99d7c2b36caf934feca1b52f32dcfd0e0a5f044b/antibloch/super_resolution",
    "extra_images": [
      "https://github.com/antibloch/super_resolution/raw/main/super_res1/highres.gif",
      "https://github.com/antibloch/super_resolution/raw/main/super_res1/highres_pred.gif",
      "https://github.com/antibloch/super_resolution/raw/main/super_res1/new_highres.gif",
      "https://github.com/antibloch/super_resolution/raw/main/super_res1/new_highres_pred.gif",
      "https://github.com/antibloch/super_resolution/raw/main/super_res2/vase_highres.gif",
      "https://github.com/antibloch/super_resolution/raw/main/super_res2/vase_highres_pred.gif",
      "https://github.com/antibloch/super_resolution/raw/main/super_res2/balcony_highres.gif",
      "https://github.com/antibloch/super_resolution/raw/main/super_res2/balcony_highres_pred.gif"
    ],
    "extra_videos": [],
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
    "image": "https://opengraph.githubassets.com/7b3569caedc40733dd3c1af8bc064fb0037b90300f07fa09b48c41725a98f09f/antibloch/SUPIR",
    "extra_images": [
      "https://github.com/antibloch/SUPIR/raw/master/input.jpg",
      "https://github.com/antibloch/SUPIR/raw/master/outpit.png"
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
    "image": "https://opengraph.githubassets.com/317128aa08779d4ae6156f7c3ad08567258fd97ea146e57f95ce589407110da3/antibloch/siren_exps",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/684ec0e83d39a85519de964aa8487b1d43a6450be5819164bc55df35f7a07057/antibloch/SAM_pointcloud_segment",
    "extra_images": [
      "https://github.com/antibloch/SAM_pointcloud_segment/raw/main/orthoimage.jpg",
      "https://github.com/antibloch/SAM_pointcloud_segment/raw/main/spherical_projection.jpg",
      "https://github.com/antibloch/SAM_pointcloud_segment/raw/main/spherical_projection.jpg",
      "https://github.com/antibloch/SAM_pointcloud_segment/raw/main/spherical_projection_segmented.jpg",
      "https://github.com/antibloch/SAM_pointcloud_segment/raw/main/original_pointcloud.png",
      "https://github.com/antibloch/SAM_pointcloud_segment/raw/main/segmented_pointcloud.png"
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
    "image": "https://opengraph.githubassets.com/ed8cef1e3413b328927401a2b1a4e99335f363d97f167b5f35f1a11a1d27af2e/antibloch/infer_pc",
    "extra_images": [
      "https://github.com/antibloch/infer_pc/raw/main/assets/ref2.png"
    ],
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
    "image": "https://opengraph.githubassets.com/fcfa876197334b4e4a45ab214062688c77c9a0f9df821ee39ee8538ada811005/antibloch/PointCloudSegmentation",
    "extra_images": [
      "https://github.com/xiaohulugo/images/raw/master/vehicle.jpg",
      "https://github.com/xiaohulugo/images/raw/master/aerial.jpg",
      "https://github.com/xiaohulugo/images/raw/master/static.jpg"
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
    "image": "https://opengraph.githubassets.com/7390738507a983c3b9cab65d74c87486557f3ebcd8a22469e40b4cf8b847956f/antibloch/ballast_extract_pointprocess",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/f652d6569454249c65a916f924f661a77030b4e499fae754a825430a5ff2b193/antibloch/pointnet_training_comp",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/d0055c80a03e4c2b373f6e06ed4b78bcc3137ccb7083d766dcad1d4310489dbb/antibloch/balast_seg",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/659b309e2e5146224df982b8b8634f57312d5a5bc69077248676bb1c9b3555af/antibloch/LSK3DNet",
    "extra_images": [
      "https://camo.githubusercontent.com/3a9037c70efad806ae0dfe8c48ea07f8f5ce5f8cac4bfa283a59683e6cef80da/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f61725869762d323430332e31353137332d6233316231622e737667",
      "https://camo.githubusercontent.com/d726b89ba7ec2e3bd734191a3453b4c31728fd79ea7e942832aeaa7f9ff87589/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d6c69676874677265792e737667",
      "https://camo.githubusercontent.com/bcde1bf644ab9834fcbe5389dc3840676397da36a49e67578ff3507990831a35/68747470733a2f2f6261646765732e746f6f7a68616f2e636f6d2f6261646765732f30314a5031505a4737473637344133465a4235394347534859562f626c75652e737667",
      "https://camo.githubusercontent.com/250f785a8cf79abfeb5b5787e55f4a46ae2e645901b3931d1f15377561f919dc/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f46656e675a696361692f4c534b33444e65743f7374796c653d736f6369616c",
      "https://camo.githubusercontent.com/43cf7cfbce84b1e527bda682ff0923dcd2abfa3a9e24c89c614c0011eafc27b0/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e742e7376673f75726c3d68747470733a2f2f70617065727377697468636f64652e636f6d2f62616467652f6c736b33646e65742d746f77617264732d6566666563746976652d616e642d656666696369656e742d33642f33642d73656d616e7469632d7365676d656e746174696f6e2d6f6e2d73656d616e7469636b69747469",
      "https://camo.githubusercontent.com/55d29035daacdbd4d22fa1dd7860f3f93566581c2d468c63064e39f9ea549c39/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e742e7376673f75726c3d68747470733a2f2f70617065727377697468636f64652e636f6d2f62616467652f6c736b33646e65742d746f77617264732d6566666563746976652d616e642d656666696369656e742d33642f6c696461722d73656d616e7469632d7365676d656e746174696f6e2d6f6e2d6e757363656e6573",
      "https://camo.githubusercontent.com/aa1b0aa7fc1567a251d741b6af4dd918d902f4f723cbb418a17a84a918f60493/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e742e7376673f75726c3d68747470733a2f2f70617065727377697468636f64652e636f6d2f62616467652f6c736b33646e65742d746f77617264732d6566666563746976652d616e642d656666696369656e742d33642f73656d616e7469632d7365676d656e746174696f6e2d6f6e2d7363616e6e6574",
      "https://camo.githubusercontent.com/1f30ff6ec0f1accb116a7fe787cf5ff0401c8060cda645d1a8b01439354102c8/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e742e7376673f75726c3d68747470733a2f2f70617065727377697468636f64652e636f6d2f62616467652f6c736b33646e65742d746f77617264732d6566666563746976652d616e642d656666696369656e742d33642f33642d73656d616e7469632d7365676d656e746174696f6e2d6f6e2d7363616e6e6574323030",
      "https://github.com/antibloch/LSK3DNet/raw/main/figures/SDS.png"
    ],
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
    "image": "https://opengraph.githubassets.com/3112bf734231b3a500298e44b0d70015e9056834d554797e7fa69c545e20fcad/antibloch/RandLA-Net-pytorch",
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
    "image": "https://opengraph.githubassets.com/c8ae1e04e763433202f2e8a40bbc3c260b0374c8478b9e8d674a0c921d3e2a59/antibloch/kprnet",
    "extra_images": [
      "https://github.com/antibloch/kprnet/raw/master/kprnet.gif"
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
    "image": "https://opengraph.githubassets.com/5860ebcfe97d3fdfac9ae9a73e52217f20dabe3d0a371ca7fdb086f6f6568120/antibloch/mod_kprnet",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/74e6970e8de1fc92c96c2faad48331261982c549a36962a3dab26cfadc651edd/antibloch/SphereFormer",
    "extra_images": [
      "https://camo.githubusercontent.com/8ba559d165903422509097e8467c8152806f47284502450db4f462b66588890a/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e742e7376673f75726c3d68747470733a2f2f70617065727377697468636f64652e636f6d2f62616467652f73706865726963616c2d7472616e73666f726d65722d666f722d6c696461722d62617365642d33642f33642d73656d616e7469632d7365676d656e746174696f6e2d6f6e2d73656d616e7469636b69747469",
      "https://camo.githubusercontent.com/2652b19cfab0a00914ac1cfb228bbda2772623488aa66f970735492077cfd5ff/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e742e7376673f75726c3d68747470733a2f2f70617065727377697468636f64652e636f6d2f62616467652f73706865726963616c2d7472616e73666f726d65722d666f722d6c696461722d62617365642d33642f6c696461722d73656d616e7469632d7365676d656e746174696f6e2d6f6e2d6e757363656e6573",
      "https://github.com/antibloch/SphereFormer/raw/master/figs/figure.jpg"
    ],
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
    "image": "https://opengraph.githubassets.com/2c875dad1dda7d8e57938cda62ef17ef3e3532f7dbc2bde379814b65c69807ef/antibloch/LiDAR_Line_Detection",
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
    "image": "https://opengraph.githubassets.com/59a3dc15f6a88ae8aab11cb3733f53d9c35d908ca315fd21d36ecca06fcd6a8a/antibloch/pointnet_segmentation",
    "extra_images": [
      "https://github.com/antibloch/pointnet_segmentation/raw/main/groundtruth.png",
      "https://github.com/antibloch/pointnet_segmentation/raw/main/predicted.png",
      "https://github.com/antibloch/pointnet_segmentation/raw/main/Point%20Cloud%20Segmentation_23Oct2024-1.png",
      "https://github.com/antibloch/pointnet_segmentation/raw/main/ood_pred.png"
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
    "image": "https://opengraph.githubassets.com/4dd03bdbd88e79b10b2f92253534a7242c98f57a2ae464a0f955375418165e73/antibloch/uniform_color_detect",
    "extra_images": [
      "https://camo.githubusercontent.com/24614cef737aee8243603764f543c1ee15daa9f88046327984d3a38ab3a14c46/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f2d596a4f6a4672544f55412f6d617872657364656661756c742e6a7067",
      "https://github.com/antibloch/uniform_color_detect/raw/main/assets/fig1.png",
      "https://github.com/antibloch/uniform_color_detect/raw/main/assets/fig2.png",
      "https://github.com/antibloch/uniform_color_detect/raw/main/assets/fig3.png",
      "https://github.com/antibloch/uniform_color_detect/raw/main/assets/fig4.png",
      "https://github.com/antibloch/uniform_color_detect/raw/main/assets/fig5.png"
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
    "image": "https://opengraph.githubassets.com/8bfc2e25073674b609e36529c536e9203dd32c209965d68b004ccb589323cb93/antibloch/yolo_detection_tracking",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/883026401cc09e906252db6fc2ade17067cebcbaac728d54f1f5b528b493926a/antibloch/PeopleNet_Object_Tracking",
    "extra_images": [],
    "extra_videos": [],
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
    "image": "https://opengraph.githubassets.com/8c190be6d047ba3875e435f3d0b6bbef79f3880283789f35432810136c5af600/antibloch/MinimaxDiffusion",
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
    "image": "https://opengraph.githubassets.com/ca648cbf9f150a926131bda56a19c0a728ece0bc62ee674867f98f67b82e96c2/antibloch/denoising-diffusion-pytorch",
    "extra_images": [
      "https://github.com/antibloch/denoising-diffusion-pytorch/raw/master/doc/diffusion3.png",
      "https://github.com/antibloch/denoising-diffusion-pytorch/raw/master/doc/diffusion4.png"
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
    "image": "https://opengraph.githubassets.com/b1fda826a2d66b7583e20d81e83549b7e83db6b2dfc832fff4667bcd84d388d9/antibloch/shopping_site_tryon",
    "extra_images": [
      "https://camo.githubusercontent.com/e933f6213ab03d4dc3947fcccf2a776c5e982cfc8f4ccd7e9b9b205daf47f172/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f25463025394625413425393725323048756767696e67253230466163652d44656d6f2d79656c6c6f77"
    ],
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
    "image": "https://opengraph.githubassets.com/f3f11ced9743f34a6665e6d19ffb04163610cfef329c50005051c9fba6945b7d/antibloch/fisheye2rectangular",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/f343f2e93d609dd1991186b47de073d58c8d6aa5e1e64b0a69e305d4d2f9bc48/antibloch/img_histo",
    "extra_images": [
      "https://github.com/antibloch/img_histo/raw/main/dist.png"
    ],
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
    "image": "https://opengraph.githubassets.com/24944b342de37ad01b01faa902f3f7fa177b39148d3d3adf264bfa5ec7f9eef0/antibloch/tumor_classification_segmentation",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/6d8d3fe2f4a7f4eb38fa8968a46c864a01d2f2981b4a4bc4d8ace954c8103552/antibloch/experiment_over_unet",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/60ffbd783defb63a7729406837d7569917bf61e2207a7aeae94aa43c1dddb500/antibloch/MRI_condensation",
    "extra_images": [],
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
    "image": "https://opengraph.githubassets.com/f4da565ea088831e8cf0c09eb0308b63a743e234793b008c35cbfda4464c4fef/antibloch/Graph_Image_Segment_Implementations",
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
    "image": "https://opengraph.githubassets.com/2f1307ed838166f4d074e48d19f2d9aa66160ecc93a762aa4f6c95628f4be342/antibloch/integrated_gradient_spectrogram_Xception",
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
    "image": "https://opengraph.githubassets.com/401a943d1a91c649b1f2b050b74789d391bd96d9bd659819e9ce019f5098e32d/antibloch/violonist_assistant",
    "extra_images": [],
    "extra_videos": [],
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
    "image": "https://opengraph.githubassets.com/3ceaf177d7eb1e889f778589260bac51ce1322b0b71d6726055e0ae07fc476dc/antibloch/detectron2_image_objectdetection",
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
    "image": "https://opengraph.githubassets.com/c79b029363e86669162fed160dfd0f5b7fa7882ce2912b3c1b6fab8c641e0723/antibloch/image_processing_course_work",
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
    "image": "https://opengraph.githubassets.com/4740596f4525d6ac8f038003b1e956168b92e4cf8db35a266b8fd23bcf690a24/antibloch/binary_edge_smoother",
    "extra_images": [
      "https://github.com/antibloch/binary_edge_smoother/raw/main/im.jpg",
      "https://user-images.githubusercontent.com/47445756/230801922-7e931490-dd3f-4c04-ab93-f16f5eefe2ab.png"
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
    "image": "https://opengraph.githubassets.com/3eca085f2465c04b6986ebaf0ff7e1ad52c363221a1ce3258ab8522c237868d2/antibloch/urban_sound_alexent_architecture_classification",
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
    "image": "https://opengraph.githubassets.com/1e4c77d2d6628d4505e5b50b8772e234ea12f655f51c59e95d81eb27b345dcf9/antibloch/mnist_denoising_autoencoder",
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
    "title": "donor_readiness",
    "category": "nlp",
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/684afe625a8bf9d0cc9a7fdb634a3c23f6a983a59548b147d45dda31256bb54f/antibloch/donor_readiness",
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/7d24056a8c4ac6ad35064f156a7ae2563bfacd1054b237a2a5de5f41bf0e2394/antibloch/donor_readiness_scorer",
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
    "title": "donor_agent",
    "category": "nlp",
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/d3fbf32cbc194005af4ef0868a1e319c4768614fe9985f468184ff90c2fcade0/antibloch/donor_agent",
    "extra_images": [],
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
    "categoryName": "Natural Language Processing",
    "image": "assets/images/placeholder.jpg",
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/e098244859fa9956f66773da2c6c0942a6b42b17a2398478d5a715d869f6fd40/antibloch/doc_qa_project",
    "extra_images": [
      "https://github.com/antibloch/doc_qa_project/raw/main/assets/ui_demo.png",
      "https://github.com/antibloch/doc_qa_project/raw/main/assets/terminal_demo.png"
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/ef484af5b2fb4652ac38d0927b3bac0c1e089ef58f5c6dbf3eef1173a5dac4e5/antibloch/llm_finetuning",
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/feab784e6cefd9ba007eecb612168146a3fb6b148a266ba2accbcfbe50e8824d/antibloch/ml_reviewer",
    "extra_images": [
      "https://github.com/antibloch/ml_reviewer/raw/main/assets/sample.png"
    ],
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
    "title": "text_signal_classification",
    "category": "nlp",
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/af361bb4f5eda0418b159ec6a7eedd49003a0f5bae041e82e9ac56589af3ad07/antibloch/text_signal_classification",
    "extra_images": [],
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/f02b941bbe161495da22f958042001650f9bdf68e2ca9ac3ab4b19cf1f2ec6d7/antibloch/text_summarization",
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/91b1ceae1a92facf54f8ed592283f8e9b303f392759985db7cd0ba3671a68dfd/antibloch/toxity_ranker",
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/6ebdc8a019b2f13e56b8c9b6444f70fd7bfc60dab18e5117b1c9433be0634459/antibloch/Bert_sentiment_classification",
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/14f261a06976af4beec057364e35e5a3737a6be6cf04ff88a7e17aff336bd9a3/antibloch/Gingerit_Plagarism_Remover",
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/81722fbfa675f1f98e1cd2856e58d9eb8d926c0b244c96bc59380bf77defe942/antibloch/BERT_CoLA",
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/9d68dd933ef1fa5e135a16d6b0c732b0c59dd16dee522823cb5bbc75febb5520/antibloch/Text_Modelling_NMF_Text_Classification_RNN",
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
    "categoryName": "Natural Language Processing",
    "image": "https://opengraph.githubassets.com/93ce03e35a5f483f9dd5cef6e3068a634dded325570ff5411a3e779e1368134b/antibloch/journal_finder",
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
    "image": "https://opengraph.githubassets.com/4df0513ad94c876a8c2feefda04cde753002bb582910f7ada75f68ed2e131a9b/antibloch/protein_sequence_classification",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/235841336-c332073a-c6d7-4385-b801-275342b2b1db.png",
      "https://user-images.githubusercontent.com/47445756/235841380-53c1cea0-eb54-4d2b-ac93-15e3ce81639b.png",
      "https://user-images.githubusercontent.com/47445756/235841982-d1a29521-be91-4f18-8abd-13b87c6e21a7.png",
      "https://user-images.githubusercontent.com/47445756/235842749-7f283665-dd5a-4b8e-b44b-19e65e860cb4.png"
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
    "image": "https://opengraph.githubassets.com/a9d8c5404894f6aec5c3441d3c4f2d458c080d8a9eaba243eebf01bc5516376b/antibloch/SMILES_classification",
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
    "image": "https://opengraph.githubassets.com/90df1df4d7c73d787de427e0b440e3eb771dc3f6b41ca8db2702a57f0993dcbe/antibloch/SSA_implementations",
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
    "image": "https://opengraph.githubassets.com/362e088bdc1eefd50d68a79b46836f6f8cad168e5ce180e42c2e93987ca1953d/antibloch/mne_EEG_visual",
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
    "image": "https://opengraph.githubassets.com/4ca1791043a8a170d196a0bedd18598a82a5718e0a208e8bd02543a157c88b21/antibloch/Structural_connectivity_network_GAN",
    "extra_images": [
      "https://github.com/dianuj1997/SCN_GAN/raw/main/dcgan.gif"
    ],
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
    "image": "https://opengraph.githubassets.com/cfd07aebeca066fb4b367d0882b924204aeff1709e1dbf80badcb850f13f40ad/antibloch/sparse_learning_novice_pro_accelerometer_classification",
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
    "image": "https://opengraph.githubassets.com/71e72ff48570d063fdcb360cf43a05ec592a805de5971536f019b7dd0b9abf95/antibloch/comparment_model_identification",
    "extra_images": [
      "https://github.com/antibloch/comparment_model_identification/raw/main/main_idea.png",
      "https://github.com/antibloch/comparment_model_identification/raw/main/demo.gif"
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
    "image": "https://opengraph.githubassets.com/f08158dbadca6cd8e411393de954fb1b6228d0409c50e56723956979bd6d40af/antibloch/SMI_amplitude_esim",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/233798112-5be89e87-1791-4380-8f43-4bbfcc18bb84.png",
      "https://user-images.githubusercontent.com/47445756/233847592-3d05c535-1b4e-4101-a1d2-bfa884c919d0.png",
      "https://user-images.githubusercontent.com/47445756/233847464-360eb794-3a17-4d21-9da7-0df149946337.png",
      "https://user-images.githubusercontent.com/47445756/233847499-7fc5dfc3-24e6-4915-afa1-68d8f72881f5.png"
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
    "image": "https://opengraph.githubassets.com/936f39dce78a7f3a9998c3a38d55f7a23230e80c38a8ef5fd3e8acf6e0c733d4/antibloch/music_genre_cnn_lstm",
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
    "image": "https://opengraph.githubassets.com/e2784d278b79539e0f224c51b7e4bc353a6508737b570368dcfe643588c13dc6/antibloch/AppCOVIDv1",
    "extra_images": [
      "https://user-images.githubusercontent.com/47445756/179343713-0758c527-498e-4d4c-b668-9863ad5f0a4e.png",
      "https://user-images.githubusercontent.com/47445756/179343717-d012ca94-311e-4c31-a297-88a3d22c78df.png"
    ],
    "extra_videos": [],
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
    "image": "https://opengraph.githubassets.com/1605dc498b0fa5842017f8f1e2f6b1abde7d417ca753815e4d9eb7a4c37b3508/antibloch/CovidTrackerApp-Web_simple_GUI_login_register_send_emails",
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
    "image": "https://opengraph.githubassets.com/5df937146a80da53121ba139bedcc3068d93334945394cc97ddd7ffe474d6c7d/antibloch/create_flowchart",
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
