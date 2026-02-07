---
layout: page
title: Efficient Approximation in AI CUs
description: Improving the efficiency of Approximate Compute Units for AI on Edge via algorithmic optimizations.
img: assets/img/approx_mult/param_btrunc_fig.jpg
importance: 2
category: work
related_publications: true
---
{% cite haider2023decoder %}

Details coming soon...


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <div class="row">
            <div class="col-sm">
                {% include figure.liquid path="assets/img/approx_mult/param_btrunc_fig.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
            </div>
        </div>
        <div class="caption">
            Fig. 1: Block diagram of the proposed DRA scheme for an N-bit approximate Booth multiplier, where D<sub>max</sub> = N/2.
        </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <div class="row">
            <div class="col-sm">
                {% include figure.liquid path="assets/img/approx_mult/dra_block_diagram.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
            </div>
        </div>
        <div class="caption">
            Fig. 2: The hardware architecture of the proposed approximate Booth multiplier using the proposed DRA scheme. The figure shows a parameterized general design that has all the possible modules included. The number of Booth encoder blocks depends on the overall bit-width of the multiplier (N). 
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/approx_mult/16_pdp_nmed.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fig. 3: A chart showing the trade-offs between NMED and PDP for different 16-bit multipliers included in our experiments. The chart is visualizing the data available in Table 3.4. The proposed designs are shown with bold labels in the char
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/approx_mult/table2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Table I: The implementational and experimental results for each of the 16-bit multipliers in our experiments.
</div>

