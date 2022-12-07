---
title: "Presenting paper @ BNAIC/BeNeLearn conference"
date: 2022-11-21
draft: true
---

Just a small post about presenting a study at a conference. First I tell the
story of how we got to present it, and after that an abstract of the paper. The
paper is currently online on the website of the conference:
[bnaic2022](https://bnaic2022.uantwerpen.be/wp-content/uploads/BNAICBeNeLearn_2022_submission_4430.pdf),
but also on [arXiv](https://arxiv.org/abs/2211.11512).

## How we got to present our paper

Me and three fellow students got to present our paper at the
[BNAIC/BeNeLearn](https://bnaic2022.uantwerpen.be/) 2022 conference in
Mechelen, Belgium.

It all started with the final assignment of the course "Human-centered machine
learning". The assignment was to write a paper on fairness or XAI. We read a
paper by Sharma et al. that introduced the fairness metric *Burden*, and wanted
to compare the metric with the well-known metric *Statistical Parity*. Thus,
the paper "Bursting the Burden Bubble: An assessment of Sharma et al.'s
Counterfactual-Based Fairness Metric." was born.

After handing it in, the professors wrote in their feedback that the paper was
very good and that it should be a submitted to a conference, for example to
BNAIC.

Of course, being a good chance to learn more about working in academics, we
agreed to submit our paper there. After some extra experiments, writing, and
reviewing during the summer break, we submitted the paper...

... And it got accepted! Very cool.

We were lucky to receive a budget from our teacher to go to the
conference. It was very interesting to go to an academic conference and hear
about all the interesting research that is being done in machine learning. We
also enjoyed visiting Mechelen, a typical Belgian city.

## Abstract of the paper

Machine learning has seen an increase in negative publicity in recent years,
due to biased, unfair, and uninterpretable models. There is a rising interest
in making machine learning models more fair for unprivileged communities, such
as women or people of color. Metrics are needed to evaluate the fairness of a
model. A novel metric for evaluating fairness between groups is Burden, which
uses counterfactuals to approximate the average distance of negatively
classified individuals in a group to the decision boundary of the model. The
goal of this study is to compare Burden to statistical parity, a well-known
fairness metric, and discover Burden's advantages and disadvantages. We do this
by calculating the Burden and statistical parity of a sensitive attribute in
three datasets: two synthetic datasets are created to display differences
between the two metrics, and one real-world dataset is used. We show that
Burden can show unfairness where statistical parity can not, and that the two
metrics can even disagree on which group is treated unfairly. We conclude that
Burden is a valuable metric, but does not replace statistical parity: it rather
is valuable to use both.
