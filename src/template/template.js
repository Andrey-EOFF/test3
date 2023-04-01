const photoCardTemplate = `
  {{#hits}}
    <div class="photo-card">
    <a href="{{largeImageURL}}" alt="{{tags}}" loading="lazy">
      <img src="{{webformatURL}}" alt="{{tags}}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes</b> {{likes}}
        </p>
        <p class="info-item">
          <b>Views</b>  {{views}}
        </p>
        <p class="info-item">
          <b>Comments</b>  {{comments}}
        </p>
        <p class="info-item">
          <b>Downloads</b> {{downloads}}
        </p>
      </div>
    </div>
  {{/hits}}
`;

export default photoCardTemplate;
