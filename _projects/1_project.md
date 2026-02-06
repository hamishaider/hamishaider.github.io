---
layout: page
title: Approximate Computation Units
description: Novel Compute Units for enabling efficient AI at Edge
img: assets/img/approx_mult/param_btrunc_fig.jpg
importance: 1
category: work
related_publications: true
---
{% cite haider2023approx %}
{% cite haider2023decoder %}
Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        <div class="row">
            <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="assets/img/approx_mult/bmult.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
            </div>
            <div class="caption">
                Fig. 1: Block diagram of the proposed Extended Exact Multiplier: An exact Booth multiplier with proposed modifications.
            </div>
        </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <div class="row">
            <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="assets/img/approx_mult/po2_mult.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
            </div>
            <div class="caption">
                Fig. 2: Block diagram of the proposed PO2 Multiplier.
            </div>
        </div>
    </div>
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <div class="row">
            <div class="col-sm">
                {% include figure.liquid path="assets/img/approx_mult/param_btrunc_fig.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
            </div>
        </div>
        <div class="caption">
            You can also have artistically styled 2/3 + 1/3 images, like these.
        </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <div class="row">
            <div class="col-sm">
                {% include figure.liquid path="assets/img/approx_mult/dra_block_diagram.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
            </div>
        </div>
        <div class="caption">
            You can also have artistically styled 2/3 + 1/3 images, like these.
        </div>
    </div>
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/approx_mult/16_pdp_nmed.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
A chart showing the trade-offs between NMED and PDP for different 16-bit multipliers included in our experiments. The chart is visualizing the data available in Table 3.4. The proposed designs are shown with bold labels in the char
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/approx_mult/table1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    This image can also have a caption. It's like magic.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/approx_mult/table2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>
{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
