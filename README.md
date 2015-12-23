# DON'T USE THIS

# hammer.relative.js

A simple patch for getting relative gesture data out of Hammer events. It requires at least the full Hammer distribution and is compatible with the jQuery plugin.

## Usage

`Hammer.plugins.relative()`

## Event Data

Calling this plugin will patch the existing `Hammer.detection.extendEventData` function to also include a `relative` hash which always contains the following fields:
* `deltaX`: the change in X since the last event
* `deltaY`: the change in Y since the last event
* `scale`: the change in scale since the last event
* `distance`: the change in distance since the last event
* `rotation`: the change in rotation since the last event

Additionally, if there are two touches detected on the current event, the attribute `separation` is also included which contains the absolute change in separation of the two touches since the last event. This can be useful for resizing by separation rather than scale on a `"pinch"` event.

## Motivation

Having Hammer report relative change makes using CSS3 transforms a lot simpler. This idea derived from a project I am working on in which I am using the wonderful jQuery.transit plugin, which supports `"+="` and the like in assigning CSS3 transform updates. In most cases this Hammer plugin simply allows direct assignment of the realtive change into the arguments of the call to `$("#myElem").css()`.
