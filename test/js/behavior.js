$(document).ready(function () {
	$hookItem = $('#list-container');
	if ('JPLoad' in window) {
		JPLoad.getTemplate('../templates/item.tpl', function (response) {
			if (response) {
				JPLoad.loadTemplate(response, $hookItem.attr('id'), {
					'id' : '1',
					'song-name' : 'Night City',
				}, 
				function (response) {
					behavior.init();
				});
			}
		});
	}
});
var behavior = {
	counter : '1',
	init : function () {
		var _this = this;
		$('#header').on('click', '.action-icons .icon-plus', function (e) {
			e.preventDefault();
			JPLoad.getTemplate('../templates/new-item.tpl', function (response) {
				if (response) {
					JPLoad.loadTemplate(response, $('#new-item').attr('id'), undefined, function (response) {
						$('#new-item').removeClass('display-none');
						_this.addItem();
					});
				}
			});
		});
	},
	getItem : function () {
		var _this = this;
		_this.counter++;
		return _this.counter;
	},

	addItem : function () {
		var _this = this,
			currentId = _this.getItem();

		$('#new-item').on('click', '.add-item-button', function (e) {
			var songName = $('#new-item .name').val();

			JPLoad.getTemplate('../templates/item.tpl', function (response) {
				if (response) {
					$('#new-item').addClass('display-none').empty();
					JPLoad.appendHTML(response, $hookItem.attr('id'),{
						'id' : currentId,
						'song-name' : songName
					},
					function (response) {
						//
					});
				}
			});
		});
	}
};
