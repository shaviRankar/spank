require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pages_home_url
    assert_response :success
  end

  test "should get live" do
    get pages_live_url
    assert_response :success
  end

  test "should get music" do
    get pages_music_url
    assert_response :success
  end

  test "should get video" do
    get pages_video_url
    assert_response :success
  end

  test "should get bio" do
    get pages_bio_url
    assert_response :success
  end

  test "should get contact" do
    get pages_contact_url
    assert_response :success
  end

end
