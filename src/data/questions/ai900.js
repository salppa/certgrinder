// AI-900: Microsoft Azure AI Fundamentals — 80 questions
// Answer distribution: exactly 20× correct:0, 20× correct:1, 20× correct:2, 20× correct:3
// Domain 1 (20q) sequence: 0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3
// Domain 2 (20q) sequence: 1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0
// Domain 3 (16q) sequence: 2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1
// Domain 4 (16q) sequence: 3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2
// Domain 5  (8q) sequence: 0,1,2,3,0,1,2,3

export const AI900_QUESTIONS = [
  // ─────────────────────────────────────────────────────────────────────────────
  // DOMAIN 1: AI Workloads & Concepts  (20 questions)
  // correct: 0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'ai900-d1-01',
    domain: 'AI Workloads & Concepts',
    q: 'A hospital deploys an AI system that analyses chest X-ray images and highlights regions that may indicate pneumonia for a radiologist to review. Which type of AI workload does this represent?',
    options: [
      'Computer vision processing images to detect medical anomalies',
      'Natural language processing interpreting radiology report text',
      'Anomaly detection monitoring real-time patient vital-sign feeds',
      'Conversational AI answering patient questions via a mobile app',
    ],
    correct: 0,
    explanation:
      'Analysing X-ray images to detect anomalies is a computer vision workload — the AI processes visual data to identify patterns humans need to review.',
  },
  {
    id: 'ai900-d1-02',
    domain: 'AI Workloads & Concepts',
    q: 'A travel company launches an AI assistant that reads customer typed questions and replies in natural language to help with bookings 24/7. Which AI workload category does this fall under?',
    options: [
      'Computer vision that recognises objects in uploaded travel photos',
      'Conversational AI that processes language and generates responses',
      'Anomaly detection that flags unusual booking behaviour in accounts',
      'Regression modelling that predicts optimal flight prices to offer',
    ],
    correct: 1,
    explanation:
      'A system that understands typed messages and replies in natural language is conversational AI — combining NLP understanding with text generation.',
  },
  {
    id: 'ai900-d1-03',
    domain: 'AI Workloads & Concepts',
    q: "A bank monitors millions of credit card transactions per minute and triggers alerts when a transaction deviates significantly from a customer's normal spending patterns. Which AI workload best describes this?",
    options: [
      'Classification that labels each transaction as fraud or legitimate',
      'Regression that predicts the expected monetary value of purchases',
      'Anomaly detection that flags deviations from established baselines',
      'Clustering that segments customers by their spending behaviour',
    ],
    correct: 2,
    explanation:
      "Monitoring data streams and alerting on significant deviations from normal patterns is anomaly detection — the model learns 'normal' and surfaces outliers.",
  },
  {
    id: 'ai900-d1-04',
    domain: 'AI Workloads & Concepts',
    q: "A streaming service predicts which show a user will watch next and surfaces it on the home screen. The prediction is based on viewing history and similar users' preferences. Which AI task is this?",
    options: [
      'Clustering grouping subscribers into demographic audience segments',
      'Text summarisation condensing episode descriptions into short blurbs',
      'Image classification categorising thumbnail images by visual genre',
      'Recommendation predicting preferred content using behavioural data',
    ],
    correct: 3,
    explanation:
      'Using past behaviour and collaborative data to predict and suggest content is a recommendation workload — a predictive ML task applied to personalisation.',
  },
  {
    id: 'ai900-d1-05',
    domain: 'AI Workloads & Concepts',
    q: "A hiring platform's AI model consistently ranks candidates from certain postcodes lower, even when their qualifications are identical to other candidates. Which Responsible AI principle is being violated?",
    options: [
      'Fairness, which requires AI to produce equitable outcomes for all',
      'Reliability, which requires AI to perform consistently over time',
      'Transparency, which requires AI decisions to be explainable always',
      'Accountability, which requires humans to own AI-driven outcomes',
    ],
    correct: 0,
    explanation:
      "Producing systematically different outcomes for groups based on irrelevant characteristics is a Fairness violation — one of Microsoft's core Responsible AI principles.",
  },
  {
    id: 'ai900-d1-06',
    domain: 'AI Workloads & Concepts',
    q: 'A financial regulator requires that every AI-driven credit decision must be explainable to the customer in plain language. Which Responsible AI principle is the regulator enforcing?',
    options: [
      'Fairness, ensuring credit scores are unbiased across applicant groups',
      'Transparency, ensuring people can understand how AI makes decisions',
      'Reliability, ensuring credit models produce consistent results always',
      'Accountability, ensuring developers answer for harmful AI outcomes',
    ],
    correct: 1,
    explanation:
      'Requiring that AI decisions be explainable to those affected is the Transparency principle — people should be able to understand how AI systems reach their outputs.',
  },
  {
    id: 'ai900-d1-07',
    domain: 'AI Workloads & Concepts',
    q: 'An AI system controlling industrial robots must behave safely and predictably in normal operation, during maintenance, and in unexpected fault conditions. Which Responsible AI principle is most relevant?',
    options: [
      'Inclusiveness, ensuring the AI system benefits all types of workers',
      'Transparency, making AI robot decisions visible to factory managers',
      'Reliability and safety, performing correctly across varied conditions',
      'Accountability, identifying who is responsible when robots malfunction',
    ],
    correct: 2,
    explanation:
      'Reliability and Safety requires AI to behave as expected across diverse and unexpected conditions — especially critical for safety-critical physical systems.',
  },
  {
    id: 'ai900-d1-08',
    domain: 'AI Workloads & Concepts',
    q: 'A government deploys an AI tool that scores job applications. The government states that if the tool causes harm, specific officials will be legally answerable for its outcomes. Which principle does this embody?',
    options: [
      'Fairness, ensuring candidates are evaluated without any bias present',
      'Privacy, protecting application data from unauthorised third parties',
      'Inclusiveness, designing the AI to accept applications of all types',
      'Accountability, holding humans responsible for AI-driven decisions',
    ],
    correct: 3,
    explanation:
      'Accountability means that humans remain responsible and legally answerable for AI systems and their consequences — keeping humans in control of high-stakes AI.',
  },
  {
    id: 'ai900-d1-09',
    domain: 'AI Workloads & Concepts',
    q: 'A smart home device continuously records household audio to improve its speech model, including private family conversations, without clearly informing users. Which Responsible AI principle is most at risk?',
    options: [
      'Privacy and security, protecting personal data from collection abuse',
      'Fairness, ensuring the model performs equally across all households',
      'Transparency, informing users exactly how their voice data is used',
      'Reliability, ensuring transcription works across different accents',
    ],
    correct: 0,
    explanation:
      'Collecting sensitive personal data without clear consent or purpose violates Privacy and Security — individuals must retain control over data about themselves.',
  },
  {
    id: 'ai900-d1-10',
    domain: 'AI Workloads & Concepts',
    q: 'A logistics company predicts parcel delivery times from historical shipment data so dispatchers can optimise route planning. Which supervised learning task type is this?',
    options: [
      'Binary classification predicting whether a delivery will be late',
      'Regression predicting a continuous numerical delivery-time value',
      'Clustering grouping deliveries into geographic region segments',
      'Reinforcement learning rewarding the model for shorter routes',
    ],
    correct: 1,
    explanation:
      'Predicting a continuous numeric output (delivery time in minutes/hours) from input features is a regression task — a core supervised machine learning workload.',
  },
  {
    id: 'ai900-d1-11',
    domain: 'AI Workloads & Concepts',
    q: 'A university groups students into learning profiles without using any predefined labels — the AI finds natural groupings based on assessment patterns alone. Which technique is used?',
    options: [
      'Supervised classification labelling students with known categories',
      'Regression predicting a numeric performance score per student',
      'Clustering discovering natural groupings in unlabelled student data',
      'Reinforcement learning rewarding students for correct study choices',
    ],
    correct: 2,
    explanation:
      'Finding groupings in data without predefined labels is unsupervised clustering — the algorithm discovers natural structure based on feature similarity alone.',
  },
  {
    id: 'ai900-d1-12',
    domain: 'AI Workloads & Concepts',
    q: "An insurer trains a model on millions of claims already labelled 'fraudulent' or 'legitimate' and then uses it to score incoming claims automatically. Which learning approach is this?",
    options: [
      'Reinforcement learning where the model improves from reward signals',
      'Unsupervised clustering finding patterns without any labels provided',
      'Transfer learning reusing a model previously trained on other data',
      'Supervised learning training on labelled data to classify new claims',
    ],
    correct: 3,
    explanation:
      'Training on labelled examples (fraudulent/legitimate) to predict the label of new inputs is supervised learning — specifically binary classification.',
  },
  {
    id: 'ai900-d1-13',
    domain: 'AI Workloads & Concepts',
    q: 'A game studio trains an AI agent by letting it play thousands of matches, receiving bonus points for wins and penalties for losses, iterating until it masters the game. Which approach is this?',
    options: [
      'Reinforcement learning improving through environment feedback signals',
      'Supervised learning training on labelled historical game recordings',
      'Unsupervised learning finding patterns in unlabelled gameplay data',
      'Transfer learning adapting a model trained on a different game first',
    ],
    correct: 0,
    explanation:
      'Learning through environment interaction using reward and penalty feedback signals is reinforcement learning — the agent improves its policy over many episodes.',
  },
  {
    id: 'ai900-d1-14',
    domain: 'AI Workloads & Concepts',
    q: 'Which statement most accurately describes the relationship between artificial intelligence, machine learning, and deep learning?',
    options: [
      'Machine learning and deep learning are separate fields unrelated to AI',
      'Machine learning is a subset of AI; deep learning is a subset of ML',
      'AI is a subset of machine learning and deep learning is equivalent',
      'Deep learning is broader than AI; machine learning is the narrowest',
    ],
    correct: 1,
    explanation:
      'AI is the broad field. Machine learning is a subset of AI that learns from data. Deep learning is a subset of ML that uses multi-layer neural networks.',
  },
  {
    id: 'ai900-d1-15',
    domain: 'AI Workloads & Concepts',
    q: 'A retailer wants to automatically organise its product catalogue into natural groups without staff defining categories in advance and without any labelled training data. Which technique applies?',
    options: [
      'Supervised classification using product labels as the training target',
      'Regression predicting a numeric relevance score for each product',
      'Clustering discovering natural groupings in the unlabelled catalogue',
      'Reinforcement learning rewarding correct product categorisation acts',
    ],
    correct: 2,
    explanation:
      'Organising data into groups without predefined labels is unsupervised clustering — the algorithm finds natural groupings based on product feature similarity.',
  },
  {
    id: 'ai900-d1-16',
    domain: 'AI Workloads & Concepts',
    q: 'A factory uses IoT sensors and an AI model that stops the production line the moment sensor readings deviate significantly from the established baseline, preventing defect escalation. Which workload is this?',
    options: [
      'Image classification detecting visual defects from camera images',
      'Regression forecasting future sensor readings based on past trends',
      'Supervised classification labelling each reading as normal or faulty',
      'Anomaly detection flagging deviations from normal sensor baselines',
    ],
    correct: 3,
    explanation:
      'Monitoring sensor streams and alerting on statistically significant deviations from a learned normal baseline is anomaly detection — the foundation of predictive maintenance.',
  },
  {
    id: 'ai900-d1-17',
    domain: 'AI Workloads & Concepts',
    q: 'Which Responsible AI principle states that AI systems must be designed to empower and benefit every person, including those with disabilities or from underrepresented groups?',
    options: [
      'Inclusiveness, meaning AI must benefit and empower all people',
      'Fairness, ensuring predictions are unbiased across population groups',
      'Accountability, assigning clear ownership for AI-driven harm events',
      'Transparency, letting users audit the AI logic behind each decision',
    ],
    correct: 0,
    explanation:
      'Inclusiveness means AI should remove barriers and serve all people — including those with disabilities or from backgrounds often underrepresented in training data.',
  },
  {
    id: 'ai900-d1-18',
    domain: 'AI Workloads & Concepts',
    q: 'A model achieves 97% accuracy on historical employee data but performs poorly predicting turnover in a newly opened office. Which phenomenon explains this degradation?',
    options: [
      'Data drift, where new-office data differs from the training distribution',
      'Overfitting, where the model memorised training patterns too closely',
      'Underfitting, where the model is too simple to capture useful patterns',
      'Cold start, where the model lacks data for the new office location',
    ],
    correct: 1,
    explanation:
      'Performing well on training data but poorly on new, unseen data is overfitting — the model memorised noise in the training set rather than learning generalisable patterns.',
  },
  {
    id: 'ai900-d1-19',
    domain: 'AI Workloads & Concepts',
    q: 'Which AI capability scans thousands of medical research papers and extracts structured information — such as drug names, dosages, and side effects — from unstructured text at scale?',
    options: [
      'Anomaly detection flagging unusual drug interaction patterns found',
      'Computer vision reading charts and graphs in published PDF articles',
      'Knowledge mining extracting structured insights from text at scale',
      'Regression predicting drug efficacy scores from clinical trial data',
    ],
    correct: 2,
    explanation:
      'Knowledge mining uses AI (NLP, OCR, entity extraction) to extract structured information from large volumes of unstructured documents — a core Azure AI use case.',
  },
  {
    id: 'ai900-d1-20',
    domain: 'AI Workloads & Concepts',
    q: 'Responsible AI guidelines require AI systems to behave correctly, safely, and consistently — even under unexpected circumstances or adversarial inputs. Which principle does this reflect?',
    options: [
      'Fairness, ensuring equitable outcomes for all individuals affected',
      'Privacy, securing user data against any form of unauthorised access',
      'Inclusiveness, designing AI that genuinely works for all end users',
      'Reliability and safety, functioning correctly under varied conditions',
    ],
    correct: 3,
    explanation:
      'Reliability and Safety is the principle requiring AI to function as designed — safely, predictably, and correctly — even in unforeseen or adversarial situations.',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // DOMAIN 2: Machine Learning on Azure  (20 questions)
  // correct: 1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'ai900-d2-01',
    domain: 'Machine Learning on Azure',
    q: 'A data scientist needs to build and train custom machine learning models in Azure using Python, controlling algorithm selection and hyperparameter tuning. Which Azure service is purpose-built for this?',
    options: [
      'Azure AI Services, for calling pre-built cognitive API endpoints',
      'Azure Machine Learning, the platform for building custom ML models',
      'Azure Synapse Analytics, optimised for large-scale data warehousing',
      'Azure Databricks, primarily used for Spark-based big data pipelines',
    ],
    correct: 1,
    explanation:
      'Azure Machine Learning is the dedicated MLOps platform for building, training, evaluating, and deploying custom models with full code control.',
  },
  {
    id: 'ai900-d2-02',
    domain: 'Machine Learning on Azure',
    q: 'A business analyst with no coding experience wants to build a customer churn model in Azure Machine Learning using a drag-and-drop visual interface. Which feature enables this?',
    options: [
      'Azure ML Automated ML that tests multiple algorithms automatically',
      'Azure ML Designer, a visual no-code drag-and-drop canvas for ML',
      'Azure ML Pipelines that chain training and evaluation steps in code',
      'Azure ML Notebooks, a Jupyter environment for Python-based work',
    ],
    correct: 1,
    explanation:
      'Azure ML Designer is the visual, no-code canvas that lets non-developers build ML pipelines by dragging and connecting pre-built modules.',
  },
  {
    id: 'ai900-d2-03',
    domain: 'Machine Learning on Azure',
    q: 'A team wants Azure to automatically test dozens of algorithms and hyperparameter combinations and select the best-performing model for their labelled dataset. Which feature does this?',
    options: [
      'Azure ML Designer providing a visual canvas for manual pipeline setup',
      'Azure ML Notebooks running custom Python experiments interactively',
      'Automated ML that searches the algorithm and hyperparameter space',
      'Azure ML Pipelines chaining reusable multi-step training workflows',
    ],
    correct: 2,
    explanation:
      'Automated ML (AutoML) iterates over many algorithms and hyperparameter combinations automatically, selecting the model with the best evaluation metric.',
  },
  {
    id: 'ai900-d2-04',
    domain: 'Machine Learning on Azure',
    q: 'After training a regression model in Azure Machine Learning, which metric best measures how far predictions deviate from true values on average in the same units as the target?',
    options: [
      'Mean Absolute Error measuring average absolute prediction distance',
      'Accuracy showing what percentage of test examples were correctly',
      "AUC-ROC representing the model's ability to distinguish classes",
      'Precision indicating the proportion of positive predictions correct',
    ],
    correct: 0,
    explanation:
      "Mean Absolute Error (MAE) measures the average absolute difference between predicted and actual values in the target's original units — the primary regression metric.",
  },
  {
    id: 'ai900-d2-05',
    domain: 'Machine Learning on Azure',
    q: 'A trained model in Azure Machine Learning needs to respond to HTTP requests from external applications with real-time predictions. Which deployment type enables this?',
    options: [
      'A real-time inference endpoint exposing the model as a REST API',
      'A batch inference endpoint scoring large data files on a schedule',
      'An Azure ML Pipeline re-running training on the new input data',
      'An Azure ML Compute Cluster processing prediction jobs overnight',
    ],
    correct: 0,
    explanation:
      'A real-time inference endpoint in Azure ML deploys a model behind an HTTP REST endpoint for synchronous, on-demand prediction requests from applications.',
  },
  {
    id: 'ai900-d2-06',
    domain: 'Machine Learning on Azure',
    q: 'Which set of metrics is most appropriate for evaluating the quality of a binary classification model in Azure Machine Learning?',
    options: [
      'MAE and RMSE, which measure average error in regression models',
      'R-squared and residuals, which evaluate linear regression fit quality',
      'Precision, recall, and F1 score, which evaluate classification quality',
      'Silhouette score and inertia, which evaluate clustering quality only',
    ],
    correct: 2,
    explanation:
      'Precision, recall, and F1 score are standard classification metrics — they capture trade-offs between false positives and false negatives across decision thresholds.',
  },
  {
    id: 'ai900-d2-07',
    domain: 'Machine Learning on Azure',
    q: 'In Azure Machine Learning, which component provides a managed, auto-scaling pool of virtual machines specifically for running training experiments and pipeline steps?',
    options: [
      'Azure ML Datastore that connects to storage accounts and databases',
      'Azure ML Dataset, a versioned reference to training data sources',
      'Azure ML Compute Cluster, a scalable VM pool for training workloads',
      'Azure ML Environment defining Python packages and Docker images',
    ],
    correct: 2,
    explanation:
      'An Azure ML Compute Cluster is a managed, auto-scaling pool of VMs used to run training experiments, AutoML jobs, and pipeline steps at scale.',
  },
  {
    id: 'ai900-d2-08',
    domain: 'Machine Learning on Azure',
    q: 'A data scientist uploads a CSV file to Azure Blob Storage and registers it in Azure Machine Learning so that all training experiments can reference it consistently across runs. What was created?',
    options: [
      'An Azure ML Dataset, a versioned pointer to the underlying data',
      'An Azure ML Model, storing the trained artefact in the registry',
      'An Azure ML Environment capturing Python packages and libraries',
      'An Azure ML Endpoint serving the trained model via HTTP requests',
    ],
    correct: 0,
    explanation:
      'An Azure ML Dataset is a versioned, named reference to data in a datastore — it lets experiments track exactly which data version was used in each training run.',
  },
  {
    id: 'ai900-d2-09',
    domain: 'Machine Learning on Azure',
    q: "Which Azure Machine Learning feature provides feature importance charts that reveal which input variables had the greatest influence on a model's predictions?",
    options: [
      'Model Explainability surfacing feature importance for transparency',
      'Automated ML testing algorithms to find best-performing models',
      'Azure ML Pipelines orchestrating multi-step reusable ML workflows',
      'Responsible AI Dashboard providing fairness and error-rate analysis',
    ],
    correct: 0,
    explanation:
      'Model Explainability in Azure ML provides feature importance scores and SHAP visualisations showing which features drove predictions — essential for debugging and compliance.',
  },
  {
    id: 'ai900-d2-10',
    domain: 'Machine Learning on Azure',
    q: 'A model deployed six months ago now makes significantly less accurate predictions because customer purchasing behaviour has shifted dramatically. What phenomenon is occurring?',
    options: [
      'Overfitting, where the model memorised training data patterns closely',
      'Data drift, where real-world data diverges from the training data',
      'Underfitting, where the model is too simple to capture patterns well',
      'Cold start, where the model lacks data for new customer predictions',
    ],
    correct: 1,
    explanation:
      'Data drift occurs when the statistical properties of production data diverge from training data over time, causing model performance to degrade in deployment.',
  },
  {
    id: 'ai900-d2-11',
    domain: 'Machine Learning on Azure',
    q: 'Which Azure service provides pre-trained AI capabilities for vision, speech, language, and decision tasks that developers can call via REST APIs without training custom models?',
    options: [
      'Azure Machine Learning for training and deploying custom ML models',
      'Azure Synapse Analytics for large-scale data analytics processing',
      'Azure AI Services providing ready-made cognitive capability APIs',
      'Azure Databricks for distributed machine learning with Apache Spark',
    ],
    correct: 2,
    explanation:
      'Azure AI Services (formerly Cognitive Services) provides pre-built APIs for vision, speech, language, and decision tasks — no model training or ML expertise required.',
  },
  {
    id: 'ai900-d2-12',
    domain: 'Machine Learning on Azure',
    q: 'A company trains a model each night and needs to score 10 million customer records stored in Azure Data Lake every morning before the business day begins. Which deployment type fits?',
    options: [
      'Real-time endpoint serving synchronous single-record HTTP requests',
      'Online endpoint with auto-scaling for high concurrent request loads',
      'Batch inference endpoint processing large dataset files on schedule',
      'Edge deployment sending the model to on-premises IoT edge devices',
    ],
    correct: 2,
    explanation:
      'Batch inference endpoints process large datasets asynchronously on a schedule — optimised for high-volume offline scoring rather than real-time request/response.',
  },
  {
    id: 'ai900-d2-13',
    domain: 'Machine Learning on Azure',
    q: 'In Azure Machine Learning, what does an Environment define when configuring a training job run?',
    options: [
      'Which compute cluster or instance should run the training workload',
      'Which dataset files should be used as input to the training job',
      'The software dependencies including Python packages and Docker base',
      'The metrics and model artefacts to track during the training run',
    ],
    correct: 2,
    explanation:
      'An Azure ML Environment specifies the software dependencies for a training job — the Python version, packages, and Docker base image needed to reproduce the training run.',
  },

  {
    id: 'ai900-d2-14',
    domain: 'Machine Learning on Azure',
    q: "Which Azure Machine Learning component groups training runs together and logs each run's metrics, parameters, and output artefacts so teams can compare experiments?",
    options: [
      'Azure ML Experiments tracking metrics and outputs per training run',
      'Azure ML Designer, the visual canvas for no-code pipeline building',
      'Azure ML Datasets, versioned references to training data sources',
      'Azure ML Environments capturing software dependencies for jobs',
    ],
    correct: 0,
    explanation:
      'Azure ML Experiments group related runs and log metrics (accuracy, loss), parameters, and artefacts per run — enabling systematic comparison of model iterations.',
  },
  {
    id: 'ai900-d2-15',
    domain: 'Machine Learning on Azure',
    q: 'AutoML in Azure ML reports that the best churn-prediction model achieved an AUC of 0.95. What does this metric specifically measure for a binary classifier?',
    options: [
      'Average absolute prediction error across all test set data records',
      "The model's ability to rank positive examples above negative ones",
      'The percentage of all test examples that were classified correctly',
      'The proportion of positive predictions that are actually positive',
    ],
    correct: 1,
    explanation:
      'AUC (Area Under the ROC Curve) measures how well the model discriminates between classes — specifically how consistently it ranks positives above negatives.',
  },
  {
    id: 'ai900-d2-16',
    domain: 'Machine Learning on Azure',
    q: 'Which Azure Machine Learning concept allows reusable, schedulable sequences of data preparation, training, and evaluation steps to be automated and triggered on new data?',
    options: [
      'Azure ML Experiments that record metrics per individual training run',
      'Azure ML Compute that provides scalable VM resources for training',
      'Azure ML Pipelines that chain and automate multi-step ML workflows',
      'Azure ML Model Registry that stores and versions trained model files',
    ],
    correct: 2,
    explanation:
      'Azure ML Pipelines define reusable, automatable workflows that chain steps like data prep, feature engineering, training, and evaluation in reproducible sequences.',
  },
  {
    id: 'ai900-d2-17',
    domain: 'Machine Learning on Azure',
    q: 'A data scientist completes training and registers the model in Azure Machine Learning so it can be versioned, shared with the deployment team, and tracked over its lifetime. Where is the model stored?',
    options: [
      'Azure ML Datastore holding the raw input data for training jobs',
      'Azure ML Compute Cluster running the training and scoring jobs',
      'Azure ML Model Registry tracking and versioning trained models',
      'Azure ML Pipeline orchestrating training and evaluation workflow',
    ],
    correct: 2,
    explanation:
      'The Azure ML Model Registry stores trained model artefacts with versioning and metadata — teams can retrieve specific versions for deployment or comparison.',
  },
  {
    id: 'ai900-d2-18',
    domain: 'Machine Learning on Azure',
    q: 'A retailer wants to predict whether each customer will purchase in the next 30 days — the output must be a yes or no answer per customer. Which ML task type should they configure?',
    options: [
      'Clustering grouping customers by their historical purchasing patterns',
      'Regression predicting a continuous spend-probability score value',
      'Binary classification predicting whether each customer will purchase',
      'Time series forecasting predicting total revenue for the next month',
    ],
    correct: 2,
    explanation:
      'Predicting a binary yes/no outcome per individual (will purchase / will not purchase) is binary classification — a supervised ML task with two output classes.',
  },
  {
    id: 'ai900-d2-19',
    domain: 'Machine Learning on Azure',
    q: "Which Azure Machine Learning feature automatically monitors a deployed model's incoming data distributions and sends alerts when they diverge significantly from the training baseline?",
    options: [
      'Model Explainability showing feature importance for each prediction',
      'Automated ML retraining the model when accuracy drops below threshold',
      'Data Drift monitoring comparing production data to training baselines',
      'Azure Monitor logging infrastructure-level exceptions and VM errors',
    ],
    correct: 2,
    explanation:
      'Data Drift monitoring in Azure ML continuously compares production input distributions against training data baselines and alerts when statistical drift is detected.',
  },
  {
    id: 'ai900-d2-20',
    domain: 'Machine Learning on Azure',
    q: 'In Azure Machine Learning Studio, which experience requires the least technical effort — simply upload a dataset, specify the task type, and let Azure find the best model?',
    options: [
      'Azure ML Designer, a visual drag-and-drop pipeline building canvas',
      'Azure ML Notebooks, a Jupyter Python environment for scripting',
      'Azure ML Pipelines for chaining reusable ML workflow components',
      'Automated ML letting Azure search algorithms to find the best model',
    ],
    correct: 3,
    explanation:
      'Automated ML requires only a dataset and task type — Azure automatically searches algorithm and hyperparameter combinations to produce the best-performing model.',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // DOMAIN 3: Computer Vision on Azure  (16 questions)
  // correct: 2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'ai900-d3-01',
    domain: 'Computer Vision on Azure',
    q: 'A retailer uses overhead camera feeds to count the number of customers in each store aisle in real time so staff can be deployed efficiently. Which Azure AI capability supports this?',
    options: [
      'OCR that extracts text from product labels in camera screenshots',
      'Image classification assigning each frame a crowd-density category',
      'Object detection locating and counting people in each video frame',
      'Facial recognition identifying each customer from their face image',
    ],
    correct: 2,
    explanation:
      'Object detection locates and counts specific object types (people) in images by drawing bounding boxes — ideal for real-time occupancy counting from camera feeds.',
  },
  {
    id: 'ai900-d3-02',
    domain: 'Computer Vision on Azure',
    q: 'A developer uses Azure AI Vision to digitise thousands of scanned paper forms by extracting all the printed text so it can be stored in a searchable database. Which capability is being used?',
    options: [
      'Image classification assigning a document type to each scanned page',
      'Object detection identifying form fields as rectangular bounding boxes',
      "Facial analysis detecting if a person's signature appears on the form",
      'OCR (Optical Character Recognition) extracting text from images',
    ],
    correct: 3,
    explanation:
      'OCR reads and extracts text from images and scanned documents — a core Azure AI Vision capability that digitises printed and handwritten content.',
  },
  {
    id: 'ai900-d3-03',
    domain: 'Computer Vision on Azure',
    q: "A social media app automatically categorises every photo uploaded by users with a single label — for example 'beach', 'city', or 'food' — so photos can be filtered by theme. Which task is this?",
    options: [
      'Image classification assigning one category label to each full image',
      'Object detection locating every distinct subject with bounding boxes',
      'Image segmentation labelling every pixel in the image by category',
      'OCR reading any text visible within each user-uploaded photograph',
    ],
    correct: 0,
    explanation:
      'Assigning a single overall category label to an entire image is image classification — the foundational computer vision task for photo tagging at scale.',
  },
  {
    id: 'ai900-d3-04',
    domain: 'Computer Vision on Azure',
    q: 'An autonomous vehicle system must simultaneously locate and identify pedestrians, cyclists, and traffic signs within its camera feed every 100 milliseconds. Which computer vision task is required?',
    options: [
      'Image classification labelling the entire scene with one category',
      'Object detection identifying and locating multiple objects per frame',
      'Semantic segmentation classifying every single pixel by object class',
      'OCR reading licence plates and road-sign text from each video frame',
    ],
    correct: 1,
    explanation:
      'Object detection identifies the category and bounding-box position of multiple distinct objects simultaneously in real time — essential for autonomous driving perception.',
  },
  {
    id: 'ai900-d3-05',
    domain: 'Computer Vision on Azure',
    q: 'Which Azure service offers pre-trained models for image analysis, object detection, OCR, and spatial analysis through REST APIs without any custom model training required?',
    options: [
      'Azure Machine Learning for training and deploying custom AI models',
      'Azure Video Indexer, specialised exclusively for analysing video files',
      'Azure AI Vision providing pre-trained APIs for image analysis tasks',
      'Azure Document Intelligence specialised for structured document forms',
    ],
    correct: 2,
    explanation:
      'Azure AI Vision (formerly Computer Vision) provides ready-to-use REST APIs for tagging, captioning, object detection, OCR, and spatial analysis without model training.',
  },
  {
    id: 'ai900-d3-06',
    domain: 'Computer Vision on Azure',
    q: 'A developer calls the Azure Custom Vision portal to build a model that distinguishes between three types of product defects. Before training, what is the minimum step required?',
    options: [
      'Purchase GPU compute resources to run the custom training process',
      'Write Python code to define the neural network architecture layers',
      'Define hyperparameter tuning ranges for the training job settings',
      'Upload and label training images covering all three defect types',
    ],
    correct: 3,
    explanation:
      'Azure Custom Vision requires labelled training images for each category — the portal handles model architecture and training. Labels and data are the only mandatory input.',
  },
  {
    id: 'ai900-d3-07',
    domain: 'Computer Vision on Azure',
    q: "A call to Azure AI Vision returns tags such as 'mountain', 'outdoor', 'snow', and 'sunny' with confidence scores for each. Which API feature produced this output?",
    options: [
      'Image tagging identifying content themes and subjects in the image',
      'Object detection returning bounding box positions for each item',
      'OCR reading any text or signage visible within the photograph',
      'Spatial analysis tracking where people have moved in the scene',
    ],
    correct: 0,
    explanation:
      'Image tagging analyses a photo and returns descriptive content tags with confidence scores — it describes subjects, settings, activities, and atmospheric qualities.',
  },
  {
    id: 'ai900-d3-08',
    domain: 'Computer Vision on Azure',
    q: "A developer needs Azure to analyse a photo and return the sentence 'Two dogs playing fetch on a sunny beach' describing what is happening in the image. Which feature generates this?",
    options: [
      'Image tagging returning keyword tags about image content only',
      'Image captioning generating a natural-language scene description',
      'Object detection listing bounding box positions for located items',
      'Facial analysis detecting faces and estimating emotional expressions',
    ],
    correct: 1,
    explanation:
      'Image captioning in Azure AI Vision generates a human-readable natural language sentence describing the scene — useful for accessibility and content summarisation.',
  },
  {
    id: 'ai900-d3-09',
    domain: 'Computer Vision on Azure',
    q: 'A security application needs to detect all faces in a group photo, estimate age and emotion, and then verify whether two photos show the same individual. Which Azure service handles this?',
    options: [
      'Azure AI Vision for general image tagging and object detection tasks',
      'Azure Custom Vision trained on face images for recognition tasks',
      'Azure Face API providing detection, analysis, and face verification',
      'Azure Video Indexer identifying faces across multiple video segments',
    ],
    correct: 2,
    explanation:
      'Azure Face API provides face detection, facial attribute analysis (age, emotion), and face verification (comparing whether two images show the same person).',
  },
  {
    id: 'ai900-d3-10',
    domain: 'Computer Vision on Azure',
    q: 'A finance team uses Azure Document Intelligence to automatically extract vendor names, invoice dates, line items, and totals from thousands of incoming invoices each day. Which capability enables this?',
    options: [
      'Azure AI Vision image tagging identifying objects within documents',
      'Azure OCR recognising individual characters and text line positions',
      'Azure Document Intelligence extracting structured fields from forms',
      'Azure Custom Vision trained specifically on invoice image examples',
    ],
    correct: 2,
    explanation:
      'Azure Document Intelligence (formerly Form Recognizer) uses AI models to extract structured key-value pairs and tables from forms like invoices — beyond just raw OCR.',
  },
  {
    id: 'ai900-d3-11',
    domain: 'Computer Vision on Azure',
    q: 'A custom vision model performs perfectly on product photos taken in the lab but struggles with photos from the factory floor under different lighting. What is the most likely cause?',
    options: [
      'The model overfitted to lab images and lacks real-world generalisation',
      'Azure Custom Vision limits the maximum resolution of input images',
      'The Custom Vision API quota was exceeded on the factory floor test',
      'Image classification models cannot work across different light sources',
    ],
    correct: 0,
    explanation:
      'Poor generalisation to new conditions (lighting, angles, backgrounds) is overfitting — the model learned artefacts specific to training images instead of robust features.',
  },
  {
    id: 'ai900-d3-12',
    domain: 'Computer Vision on Azure',
    q: 'A shopping centre deploys a system that tracks customer movement through zones, counts how many people wait in a checkout queue, and alerts staff when the queue exceeds a threshold. Which Azure AI Vision feature powers this?',
    options: [
      'OCR reading promotional text visible on queue management displays',
      'Spatial Analysis detecting movement, occupancy, and zones in video',
      'Video Indexer extracting transcript keywords from CCTV recordings',
      'Custom Vision classifying each video frame by its occupancy level',
    ],
    correct: 1,
    explanation:
      'Spatial Analysis in Azure AI Vision processes live video to track people movement, monitor zone occupancy, and trigger alerts — designed for physical space management.',
  },
  {
    id: 'ai900-d3-13',
    domain: 'Computer Vision on Azure',
    q: 'A developer wants to train Azure to identify 12 unique animal species in wildlife photography using the Azure portal with no custom code required. Which service should they use?',
    options: [
      'Azure Custom Vision for training domain-specific image classifiers',
      'Azure AI Vision for calling pre-trained general image analysis APIs',
      'Azure ML Designer for building visual image classification pipelines',
      'Azure Cognitive Search for indexing and retrieving image metadata',
    ],
    correct: 0,
    explanation:
      'Azure Custom Vision is the no-code portal for training custom image classification or object detection models on your own labelled dataset.',
  },
  {
    id: 'ai900-d3-14',
    domain: 'Computer Vision on Azure',
    q: 'What distinguishes the output of object detection from image classification in Azure AI Vision?',
    options: [
      'Object detection returns confidence scores while classification does',
      'Object detection returns content tags while classification gives none',
      'Object detection returns a scene caption while classification does not',
      'Object detection returns bounding box coordinates; classification does not',
    ],
    correct: 3,
    explanation:
      'Object detection returns bounding box coordinates (x, y, width, height) for each located object — image classification only returns a category label and confidence score.',
  },
  {
    id: 'ai900-d3-15',
    domain: 'Computer Vision on Azure',
    q: 'A broadcaster needs to search an archive of thousands of video recordings to find every clip in which a specific news anchor appears on screen. Which Azure service is designed for this?',
    options: [
      'Azure Video Indexer that analyses and indexes video including faces',
      'Azure Face API which detects faces in individual static images only',
      'Azure Custom Vision trained to classify video frames by person type',
      'Azure AI Vision that analyses individual image frames for all objects',
    ],
    correct: 0,
    explanation:
      'Azure Video Indexer analyses video content end-to-end — including face identification, speech transcription, scene detection, and keyword indexing across recordings.',
  },
  {
    id: 'ai900-d3-16',
    domain: 'Computer Vision on Azure',
    q: 'A developer uses the Azure AI Vision Read API on a scanned letter and receives the extracted text along with bounding box positions for each word. Which capability was used?',
    options: [
      'Image classification labelling the letter by its document content type',
      'Azure AI Vision OCR reading and locating text from the document',
      'Document Intelligence extracting structured key-value form fields',
      'Object detection identifying document sections as bounding regions',
    ],
    correct: 1,
    explanation:
      'The Azure AI Vision Read API (OCR) extracts text from images and returns both the recognised words and their pixel-level bounding-box positions on the page.',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // DOMAIN 4: Natural Language Processing on Azure  (16 questions)
  // correct: 3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'ai900-d4-01',
    domain: 'Natural Language Processing on Azure',
    q: "A customer service platform automatically assigns each incoming support ticket a label of 'positive', 'neutral', or 'negative' based on the customer's language. Which NLP capability is used?",
    options: [
      'Named entity recognition extracting product names from the message',
      'Language detection identifying which language the ticket is written in',
      'Key phrase extraction finding the most important terms in the text',
      'Sentiment analysis classifying text by its emotional tone or opinion',
    ],
    correct: 3,
    explanation:
      'Sentiment analysis classifies text by emotional polarity (positive, neutral, negative) — making it ideal for automatically triaging and prioritising support tickets.',
  },
  {
    id: 'ai900-d4-02',
    domain: 'Natural Language Processing on Azure',
    q: "A global news portal receives articles in 50 languages and must automatically identify each article's language before routing it to the correct editorial team. Which Azure NLP feature handles this?",
    options: [
      'Language detection identifying the written language of input text',
      'Text translation converting articles from any language into English',
      'Named entity recognition extracting location names from articles',
      'Key phrase extraction pulling the most important topics from text',
    ],
    correct: 0,
    explanation:
      'Language detection identifies the written language of input text — Azure AI Language returns the detected language and a confidence score for each document submitted.',
  },
  {
    id: 'ai900-d4-03',
    domain: 'Natural Language Processing on Azure',
    q: 'A legal firm needs to extract all person names, company names, and jurisdiction locations from thousands of unstructured contract documents. Which Azure NLP feature should they use?',
    options: [
      "Sentiment analysis scoring each document's overall emotional tone",
      'Named entity recognition identifying and classifying named mentions',
      'Key phrase extraction listing the most significant topic phrases',
      'Text summarisation reducing long contracts into shorter summaries',
    ],
    correct: 1,
    explanation:
      'Named Entity Recognition (NER) identifies and classifies entities like people, organisations, locations, and dates — exactly what is needed for contract analysis.',
  },
  {
    id: 'ai900-d4-04',
    domain: 'Natural Language Processing on Azure',
    q: 'A support manager wants to automatically identify the main topics discussed across thousands of customer emails per day — not sentiment, just the key subjects customers raise. Which feature applies?',
    options: [
      'Sentiment analysis scoring each email as positive, neutral, or negative',
      'Language detection identifying which language each email is written in',
      'Named entity recognition extracting customer names and product codes',
      'Key phrase extraction identifying the most important topic phrases',
    ],
    correct: 3,
    explanation:
      'Key phrase extraction surfaces the most relevant terms and topics in text — useful for summarising what subjects are covered across large volumes of unstructured content.',
  },
  {
    id: 'ai900-d4-05',
    domain: 'Natural Language Processing on Azure',
    q: "A travel assistant bot understands queries like 'Book me a flight to Rome next Friday' and must extract the booking intent and entities (destination, date) for backend processing. Which Azure service provides this?",
    options: [
      'Azure AI Speech converting spoken utterances to text transcripts',
      'Azure Text Analytics for sentiment and key phrase extraction only',
      'Azure Translator converting the query between different languages',
      'Azure Conversational Language Understanding for intent and entities',
    ],
    correct: 3,
    explanation:
      'Azure Conversational Language Understanding (CLU) maps user utterances to intents (BookFlight) and extracts entities (Rome, next Friday) for conversational AI applications.',
  },
  {
    id: 'ai900-d4-06',
    domain: 'Natural Language Processing on Azure',
    q: 'A company wants to turn its existing FAQ document into a Q&A chatbot without writing any code. Which Azure AI service is designed specifically for this no-code scenario?',
    options: [
      'Azure Question Answering building a bot directly from FAQ content',
      'Azure Language Understanding requiring custom intent modelling setup',
      'Azure Text Analytics extracting key phrases from FAQ documents',
      'Azure Bot Service requiring custom code for Q&A functionality',
    ],
    correct: 0,
    explanation:
      'Azure Question Answering (part of Azure AI Language) creates a knowledge base directly from FAQ pages, Word documents, or URLs — then exposes it as a Q&A bot with no code.',
  },
  {
    id: 'ai900-d4-07',
    domain: 'Natural Language Processing on Azure',
    q: 'An app needs to convert text written in Spanish into English and then from English into Mandarin Chinese for international distribution. Which Azure AI service handles this?',
    options: [
      'Azure Text Analytics identifying sentiment and language in text',
      'Azure Translator converting text between over 100 languages fast',
      'Azure Language Understanding extracting meaning from user phrases',
      'Azure Cognitive Search indexing multilingual documents for search',
    ],
    correct: 1,
    explanation:
      "Azure Translator is Azure's dedicated text translation service, supporting 100+ languages for real-time and batch translation scenarios with a simple REST API.",
  },
  {
    id: 'ai900-d4-08',
    domain: 'Natural Language Processing on Azure',
    q: 'A call centre builds a solution that transcribes phone calls in real time and simultaneously analyses each transcript to detect customer frustration. Which two Azure services are combined?',
    options: [
      'Azure Translator and Azure Text Analytics for multilingual support',
      'Azure Speech to Text and Azure AI Language for transcription plus',
      'Azure Form Recognizer and Azure Search for document extraction',
      'Azure Bot Service and Azure CLU for conversation management',
    ],
    correct: 1,
    explanation:
      'Azure Speech to Text transcribes audio to text in real time; Azure AI Language then analyses the transcript for sentiment — a standard call-analytics architecture.',
  },
  {
    id: 'ai900-d4-09',
    domain: 'Natural Language Processing on Azure',
    q: 'An accessibility application reads website text aloud to visually impaired users by generating natural-sounding spoken audio from on-screen written content. Which Azure AI Speech feature enables this?',
    options: [
      'Speech to Text converting microphone audio into text transcripts',
      "Speaker Recognition verifying a user's identity from their voice",
      'Text to Speech synthesising spoken audio from written text input',
      'Speech Translation converting spoken words between two languages',
    ],
    correct: 2,
    explanation:
      'Text to Speech (TTS) in Azure AI Speech converts written text into natural-sounding spoken audio — the foundation for screen readers, assistants, and accessibility tools.',
  },
  {
    id: 'ai900-d4-10',
    domain: 'Natural Language Processing on Azure',
    q: 'A law firm needs a searchable index of 50,000 scanned contracts where staff can search across all documents by keyword and topic. Which Azure service is purpose-built for this?',
    options: [
      'Azure Cognitive Search with AI enrichment indexing document content',
      'Azure Text Analytics extracting key phrases from each document',
      'Azure Form Recognizer extracting structured form fields and tables',
      'Azure Translator converting contracts to a single common language',
    ],
    correct: 0,
    explanation:
      'Azure Cognitive Search ingests documents, applies AI enrichment (OCR, NER, key phrases), and builds a full-text search index that can be queried by business users.',
  },
  {
    id: 'ai900-d4-11',
    domain: 'Natural Language Processing on Azure',
    q: "A product team analyses customer reviews and needs to know not just overall sentiment but specifically how customers feel about 'battery life', 'display quality', and 'price' separately. Which feature applies?",
    options: [
      'Aspect-based sentiment analysis evaluating opinion per named aspect',
      'Key phrase extraction listing the most prominent review topic terms',
      'Named entity recognition extracting product model names from text',
      'Language detection identifying which language each review is written',
    ],
    correct: 0,
    explanation:
      'Aspect-based (opinion mining) sentiment analysis identifies specific product aspects and the sentiment expressed toward each — enabling granular product feedback analysis.',
  },
  {
    id: 'ai900-d4-12',
    domain: 'Natural Language Processing on Azure',
    q: 'A developer builds a customer service bot that holds multi-turn conversations, remembers context across messages, and transfers to a human agent when it cannot resolve an issue. Which Azure service provides the conversation orchestration?',
    options: [
      'Azure Bot Service providing runtime, channels, and human handoff',
      'Azure Language Understanding extracting intents from utterances',
      'Azure Text Analytics scoring sentiment across conversation turns',
      'Azure Question Answering answering single questions from an FAQ',
    ],
    correct: 0,
    explanation:
      'Azure Bot Service provides the bot runtime, multi-turn dialog management, channel connectors (Teams, webchat), and built-in human handoff capability for enterprise bots.',
  },

  {
    id: 'ai900-d4-13',
    domain: 'Natural Language Processing on Azure',
    q: 'A media company needs automatically generated 150-word summaries of long news articles to display in a mobile app news feed. Which Azure AI Language feature should they use?',
    options: [
      'Key phrase extraction returning important terms without full sentences',
      "Sentiment analysis scoring the article's overall emotional positivity",
      'Named entity recognition identifying key people and places only',
      'Text summarisation condensing long documents into shorter outputs',
    ],
    correct: 3,
    explanation:
      "Azure AI Language's text summarisation produces extractive or abstractive summaries of long documents — ideal for condensing news articles for mobile news feeds.",
  },
  {
    id: 'ai900-d4-14',
    domain: 'Natural Language Processing on Azure',
    q: 'A developer needs to build a voice-activated assistant that understands spoken commands and converts them to text for further processing. Which Azure AI Speech capability is used first?',
    options: [
      'Speech to Text converting spoken audio input into written text',
      'Text to Speech converting written commands back into audio output',
      "Speaker Recognition verifying the user's identity from their voice",
      'Speech Translation converting speech from one language to another',
    ],
    correct: 0,
    explanation:
      'Speech to Text (ASR) is the first step in any voice assistant pipeline — it converts spoken audio into written text that can then be processed by NLP services.',
  },
  {
    id: 'ai900-d4-15',
    domain: 'Natural Language Processing on Azure',
    q: "An HR department wants to automatically parse job application emails and extract the applicant's name, phone number, email address, and years of experience. Which NLP feature applies?",
    options: [
      'Sentiment analysis classifying each application as positive or negative',
      'Named entity recognition extracting structured entities from the text',
      'Key phrase extraction listing the most important topics in the email',
      'Language detection identifying which language each email is written',
    ],
    correct: 1,
    explanation:
      'Named Entity Recognition (NER) extracts and classifies structured entities like person names, phone numbers, email addresses, and numeric values from unstructured text.',
  },
  {
    id: 'ai900-d4-16',
    domain: 'Natural Language Processing on Azure',
    q: 'A developer configures an Azure AI Language resource to identify whether a social media post is discussing a product, a service, or a company brand. Each post gets one of three labels. Which task is this?',
    options: [
      'Sentiment analysis classifying posts by positive or negative emotion',
      'Language detection identifying which platform each post comes from',
      'Key phrase extraction listing the most important words in each post',
      'Custom text classification assigning domain-specific labels to text',
    ],
    correct: 3,
    explanation:
      'Assigning custom category labels (product/service/brand) to text is custom text classification in Azure AI Language — trained on your own labelled examples.',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // DOMAIN 5: Generative AI on Azure  (8 questions)
  // correct: 0,1,2,3,0,1,2,3
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'ai900-d5-01',
    domain: 'Generative AI on Azure',
    q: 'A developer sends a text prompt to Azure OpenAI Service describing a business problem and receives a detailed multi-paragraph analysis in return. Which generative AI capability is being demonstrated?',
    options: [
      'Text generation using a large language model to produce content',
      'Image generation creating visual illustrations from text prompts',
      'Code generation writing functional software from specifications',
      'Summarisation condensing existing documents into shorter content',
    ],
    correct: 0,
    explanation:
      'Sending a prompt and receiving generated text is text generation — the core capability of LLMs like GPT-4 available through Azure OpenAI Service.',
  },
  {
    id: 'ai900-d5-02',
    domain: 'Generative AI on Azure',
    q: "A developer connects an Azure OpenAI assistant to the company's internal knowledge base so it answers questions using only verified company documents rather than general knowledge. Which technique is this?",
    options: [
      "Fine-tuning updating the model's weights on internal documents first",
      'Retrieval-Augmented Generation grounding responses in data sources',
      'Prompt engineering writing instructions directly in the system prompt',
      'Embedding search indexing documents for semantic similarity queries',
    ],
    correct: 1,
    explanation:
      'RAG (Retrieval-Augmented Generation) retrieves relevant documents at inference time and provides them as context — grounding LLM responses in verified sources.',
  },
  {
    id: 'ai900-d5-03',
    domain: 'Generative AI on Azure',
    q: 'A developer wants an Azure OpenAI model to always respond as a professional support agent, maintain a helpful tone, and refuse to discuss topics outside the product scope. How is this configured?',
    options: [
      'Fine-tuning the model on thousands of on-topic customer service logs',
      'Using RAG to retrieve product documents for every user message',
      "Writing a system prompt that defines the model's role and scope",
      'Selecting a different Azure OpenAI model endpoint for chat tasks',
    ],
    correct: 2,
    explanation:
      "A system prompt defines the model's persona, tone, and behavioural constraints — it is the primary prompt engineering tool for shaping LLM responses in applications.",
  },
  {
    id: 'ai900-d5-04',
    domain: 'Generative AI on Azure',
    q: 'A user submits a harmful request to an Azure OpenAI-powered app and the request is automatically blocked before the model generates a response. Which Azure feature is responsible?',
    options: [
      "The model's fine-tuning filtering unsafe output at training time",
      'Azure Policy restricting which users can access the OpenAI resource',
      'Prompt grounding limiting the model to approved reference documents',
      'Azure OpenAI content filters blocking harmful inputs and outputs',
    ],
    correct: 3,
    explanation:
      'Azure OpenAI built-in content filters classify and block harmful content categories in both inputs and outputs, with configurable severity thresholds per use case.',
  },
  {
    id: 'ai900-d5-05',
    domain: 'Generative AI on Azure',
    q: "A company provides thousands of historical customer support tickets to Azure OpenAI to adapt the base model so it replies in the company's specific tone and format. Which technique is this?",
    options: [
      'Fine-tuning the model on domain examples to shape its behaviour',
      'RAG retrieving relevant tickets to add to each user prompt context',
      'Prompt engineering defining tone rules in the system prompt only',
      'Content filtering preventing responses that deviate from brand rules',
    ],
    correct: 0,
    explanation:
      "Fine-tuning updates a model's weights using additional training examples, adapting a general LLM to a specific domain's style, vocabulary, or response format.",
  },
  {
    id: 'ai900-d5-06',
    domain: 'Generative AI on Azure',
    q: 'Which Azure AI service provides enterprise-grade managed access to OpenAI models — including GPT-4o, DALL-E, and Whisper — through a secure REST API?',
    options: [
      'Azure Machine Learning, for training and deploying custom ML models',
      'Azure OpenAI Service, providing managed access to OpenAI models',
      'Azure AI Language, for NLP tasks like sentiment and translation',
      'Azure Cognitive Search, for building enterprise search solutions',
    ],
    correct: 1,
    explanation:
      "Azure OpenAI Service provides secure, enterprise-grade REST API access to OpenAI's models (GPT-4o, DALL-E 3, Whisper) with Azure's compliance and data privacy guarantees.",
  },
  {
    id: 'ai900-d5-07',
    domain: 'Generative AI on Azure',
    q: "A product designer types 'a sleek wireless headphone with rose gold accents on a white background' and Azure OpenAI generates a photorealistic product mockup image. Which DALL-E capability is used?",
    options: [
      'Text generation producing written product descriptions from prompts',
      'Code generation producing frontend CSS styling from specifications',
      'Image generation creating visual content from text descriptions',
      'Embedding generation converting text prompts to vector format',
    ],
    correct: 2,
    explanation:
      "DALL-E is Azure OpenAI's image generation model — it creates original photorealistic or artistic images directly from natural language text descriptions.",
  },
  {
    id: 'ai900-d5-08',
    domain: 'Generative AI on Azure',
    q: 'An AI assistant confidently tells a user that a historical event happened in 1847 when that event never actually occurred. What is the term for this type of LLM error?',
    options: [
      'Overfitting, where the model memorises training data incorrectly',
      "Prompt injection, where a user manipulates the model's instructions",
      'Data drift, where model behaviour shifts away from training patterns',
      'Hallucination, where the model generates plausible but false content',
    ],
    correct: 3,
    explanation:
      'Hallucination is when an LLM produces fluent, confident-sounding text that is factually incorrect or entirely fabricated — a key risk managed through RAG and human review.',
  },
];
