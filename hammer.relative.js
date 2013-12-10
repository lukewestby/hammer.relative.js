(function (Hammer) {

	Hammer.plugins.relative = function () {

		var originalExtendEventData = Hammer.detection.extendEventData;
		Hammer.detection.extendEventData = function (ev) {
			var extendedEv = originalExtendEventData.call(this, ev);
			if(extendedEv.touches.length === 2) extendedEv.separation = Hammer.utils.getDistance(extendedEv.touches[0], extendedEv.touches[1]);
			else extendedEv.separation = 0;
			extendedEv.relative = {
				deltaX: extendedEv.deltaX - this.current.lastEvent.deltaX,
				deltaY: extendedEv.deltaY - this.current.lastEvent.deltaY,
				scale: extendedEv.scale - this.current.lastEvent.scale,
				distance: extendedEv.distance - this.current.lastEvent.distance,
				rotation: extendedEv.rotation - this.current.lastEvent.rotation,
				separation: extendedEv.separation - this.current.lastEvent.separation
			};

			return extendedEv;
		};
	};
})(window.Hammer);