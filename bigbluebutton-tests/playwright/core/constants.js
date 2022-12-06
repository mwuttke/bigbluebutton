const CI = process.env.CI === 'true';

// GLOBAL TESTS VARS
exports.ELEMENT_WAIT_TIME = CI ? 10000 : 5000;
exports.ELEMENT_WAIT_LONGER_TIME = CI ? 20000 : 10000;
exports.ELEMENT_WAIT_EXTRA_LONG_TIME = CI ? 30000 : 15000;
exports.LOOP_INTERVAL = 1200;
exports.USER_LIST_VLIST_BOTS_LISTENING = 50;

// STRESS TESTS VARS
exports.JOIN_AS_MODERATOR_TEST_ROUNDS = 15;
exports.MAX_JOIN_AS_MODERATOR_FAIL_RATE = 0.05;
exports.BREAKOUT_ROOM_INVITATION_TEST_ROUNDS = 20;
exports.JOIN_TWO_USERS_ROUNDS = 20;
exports.JOIN_TWO_USERS_KEEPING_CONNECTED_ROUNDS = 20;
exports.JOIN_TWO_USERS_EXCEEDING_MAX_PARTICIPANTS = 20;
exports.MAX_PARTICIPANTS_TO_JOIN = 4;

// MEDIA CONNECTION TIMEOUTS
exports.VIDEO_LOADING_WAIT_TIME = 15000;
exports.UPLOAD_PDF_WAIT_TIME = CI ? 40000 : 20000;

exports.CUSTOM_MEETING_ID = 'custom-meeting';
